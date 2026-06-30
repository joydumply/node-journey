import AppError from '../errors/AppErrors.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserByID = async (id) => {
	const user = await prisma.user.findUnique({ where: { id } });

	if (!user) {
		throw new AppError('User not found', 404);
	}

	return user;
};

export const createUser = async (user) => {
	if (!user.email) {
		throw new AppError('No email', 400);
	}

	return prisma.user.create({
		data: {
			email: user.email,
			name: user.name ?? '',
		},
	});
};
