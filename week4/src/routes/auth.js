import { Router } from 'express';
import * as authController from '../controllers/auth.js';
import { validateRegister } from '../middlewares/validate.js';
import { loginLimiter, registerLimiter } from '../middlewares/rateLimiter.js';
const authRouter = Router();

authRouter.post(
	'/register',
	registerLimiter,
	validateRegister,
	authController.register
);
authRouter.post('/login', loginLimiter, authController.login);
authRouter.post('/refresh', authController.refresh);
authRouter.post('/logout', authController.logout);

export default authRouter;
