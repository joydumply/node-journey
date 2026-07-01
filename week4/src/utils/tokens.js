import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export function generateTokens(userId) {
	const accessToken = jwt.sign(
		{ userId: userId },
		process.env.JWT_ACCESS_SECRET,
		{
			expiresIn: '15m',
		}
	);

	const refreshToken = jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, {
		expiresIn: '7d',
	});

	return { accessToken, refreshToken };
}

export function hashToken(token) {
	return crypto.createHash('sha256').update(token).digest('hex');
}
