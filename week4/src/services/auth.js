import AppError from '../errors/AppErrors.js';
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient, Prisma } from '@prisma/client';
import { generateTokens, hashToken } from '../utils/tokens.js';

const prisma = new PrismaClient();

export const register = async (email, password) => {
	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await prisma.user.create({
			data: {
				email: email,
				password: hashedPassword,
			},
		});

		const { password: _, ...userWithoutPassword } = user;
		return userWithoutPassword;
	} catch (err) {
		if (
			err instanceof Prisma.PrismaClientKnownRequestError &&
			err.code === 'P2002'
		) {
			throw new AppError('Email already registered', 409);
		}
		throw err;
	}
};
export const login = async (email, password) => {
	const user = await prisma.user.findUnique({ where: { email } });
	if (!user) {
		throw new AppError('Invalid credentials', 401);
	}

	const isValid = await bcrypt.compare(password, user.password);
	if (!isValid) {
		throw new AppError('Invalid credentials', 401);
	}

	const { password: _, ...userWithoutPassword } = user;
	const { accessToken, refreshToken } = generateTokens(
		userWithoutPassword.id
	);

	await prisma.refreshToken.create({
		data: {
			token: hashToken(refreshToken),
			userId: userWithoutPassword.id,
			expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
		},
	});
	return { user: userWithoutPassword, accessToken, refreshToken };
};
export const refresh = async (refreshToken) => {
	try {
		jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
	} catch (err) {
		throw new AppError('Token is invalid', 401);
	}
	const storedToken = await prisma.refreshToken.findUnique({
		where: {
			token: hashToken(refreshToken),
		},
	});
	if (!storedToken) {
		throw new AppError('Token is invalid', 401);
	}

	if (storedToken.expiresAt < new Date()) {
		throw new AppError('Token is invalid', 401);
	}

	const { accessToken } = generateTokens(storedToken.userId);
	return { accessToken };
};
export const logout = async (refreshToken) => {
	await prisma.refreshToken.deleteMany({
		where: { token: hashToken(refreshToken) },
	});
};
