import {
	getNotes,
	createNote,
	getNoteById,
	updateNote,
	deleteNote,
} from '../services/notes.js';

export const getAll = async (req, res, next) => {
	try {
		const { page, limit, isDone } = req.query;
		const userId = req.user.userId;
		const notes = await getNotes({ page, limit, isDone, userId });
		res.json(notes);
	} catch (err) {
		next(err);
	}
};

export const create = async (req, res, next) => {
	try {
		const userId = req.user.userId;
		// res.status(200).json({ ...req.body, userId });
		const note = await createNote({ ...req.body, userId });
		res.status(201).json(note);
	} catch (err) {
		next(err);
	}
};

export const getById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const userId = req.user.userId;
		const note = await getNoteById(id, userId);
		res.json(note);
	} catch (err) {
		next(err);
	}
};

export const update = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { title, content, isDone } = req.body;
		const userId = req.user.userId;

		const note = await updateNote(id, userId, title, content, isDone);
		res.json(note);
	} catch (err) {
		next(err);
	}
};

export const remove = async (req, res, next) => {
	try {
		const { id } = req.params;
		const userId = req.user.userId;

		await deleteNote(id, userId);
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
};
