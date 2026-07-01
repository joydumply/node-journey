import { z } from 'zod';
import AppError from '../errors/AppErrors.js';
const registerSchema = z.object({
	email: z.email('Invalid email'),
	password: z
		.string()
		.min(8, { error: 'Password must be at least 8 characters' }),
});

export const validateRegister = (req, res, next) => {
	try {
		registerSchema.parse(req.body);
		next();
	} catch (err) {
		if (err instanceof z.ZodError) {
			return next(new AppError(err.issues[0].message, 400));
		}
		next(err);
	}
};
