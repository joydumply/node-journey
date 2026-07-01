import * as authService from '../services/auth.js';

export const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const { user, accessToken, refreshToken } = await authService.login(
			email,
			password
		);

		res.status(200).json({ user, accessToken, refreshToken });
	} catch (err) {
		next(err);
	}
};

export const register = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await authService.register(email, password);
		res.status(201).json(user);
	} catch (err) {
		next(err);
	}
};

export const refresh = async (req, res, next) => {
	try {
		const { refreshToken } = req.body;
		const { accessToken } = await authService.refresh(refreshToken);
		res.status(200).json({ accessToken });
	} catch (err) {
		next(err);
	}
};

export const logout = async (req, res, next) => {
	try {
		const { refreshToken } = req.body;
		await authService.logout(refreshToken);
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
};
