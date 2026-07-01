import AppError from '../errors/AppErrors.js';
import jwt from 'jsonwebtoken';
export const isTokenValid = (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			return next(new AppError('No token', 401));
		}

		const token = authHeader.split(' ')[1];
		const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
		req.user = decoded;
		next();
	} catch (err) {
		next(new AppError('Invalid or expired token', 401));
	}
};
