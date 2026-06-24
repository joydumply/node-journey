import AppError from '../errors/AppErrors.js';
import { randomUUID } from 'crypto';
const notes = [
	{
		id: randomUUID(),
		text: 'Buy a milk',
		isDone: false,
	},
	{
		id: randomUUID(),
		text: 'Call Max',
		isDone: true,
	},
];

export const getNotes = () => {
	return notes;
};

export const createNote = (note) => {
	const id = randomUUID();
	if (!note.text) {
		throw new AppError('Not a note', 400);
	}
	const noteObj = {
		id: id,
		text: note.text,
		isDone: note.isDone ?? false,
	};
	notes.push(noteObj);
	return noteObj;
};

export const getNoteById = (id) => {
	const note = notes.find((note) => note.id == id);
	if (!note) {
		throw new AppError('Note not found', 404);
	}
	return note;
};

export const updateNote = (id, text, isDone) => {
	const note = notes.find((note) => note.id == id);
	if (!note) {
		throw new AppError('Note not found', 404);
	}
	note.text = text ?? note.text;
	note.isDone = isDone ?? note.isDone;

	return note;
};

export const deleteNote = (id) => {
	const index = notes.findIndex((note) => note.id == id);
	if (index === -1) {
		throw new AppError('Note not found', 404);
	}
	notes.splice(index, 1);
};
