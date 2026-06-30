import {
	getNotes,
	createNote,
	getNoteById,
	updateNote,
	deleteNote,
} from '../services/notes.js';

export const getAll = async (req, res, next) => {
	try {
		const { page, limit, isDone, userId } = req.query;
		const notes = await getNotes({ page, limit, isDone, userId });
		res.json(notes);
	} catch (err) {
		next(err);
	}
};

export const create = async (req, res, next) => {
	try {
		const note = await createNote(req.body);
		res.status(201).json(note);
	} catch (err) {
		next(err);
	}
};

export const getById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const note = await getNoteById(id);
		res.json(note);
	} catch (err) {
		next(err);
	}
};

export const update = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { title, content, isDone } = req.body;
		const note = await updateNote(id, title, content, isDone);
		res.json(note);
	} catch (err) {
		next(err);
	}
};

export const remove = async (req, res, next) => {
	try {
		const { id } = req.params;
		await deleteNote(id);
		res.sendStatus(204);
	} catch (err) {
		next(err);
	}
};
