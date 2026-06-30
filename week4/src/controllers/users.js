import { getUserByID, createUser } from '../services/users.js';

export const getByID = async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await getUserByID(id);
		res.json(user);
	} catch (err) {
		next(err);
	}
};
export const create = async (req, res, next) => {
	try {
		const user = await createUser(req.body);
		res.status(201).json(user);
	} catch (err) {
		next(err);
	}
};
