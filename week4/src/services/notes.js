import AppError from '../errors/AppErrors.js';
import { getUserByID } from './users.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getNotes = async ({
	page = 1,
	limit = 10,
	isDone,
	userId,
} = {}) => {
	const skip = (page - 1) * limit;

	const where = {};
	if (isDone !== undefined) where.isDone = isDone === 'true';
	if (userId !== undefined) where.userId = userId;

	return prisma.note.findMany({
		where,
		skip,
		take: Number(limit),
		orderBy: { createdAt: 'desc' },
	});
};

export const createNote = async (note) => {
	if (!note.title) {
		throw new AppError('Not a note', 400);
	}

	if (!note.userId) {
		throw new AppError('No note user', 400);
	}

	await getUserByID(note.userId);

	return prisma.note.create({
		data: {
			title: note.title,
			content: note.content ?? '',
			isDone: note.isDone ?? false,
			userId: note.userId,
		},
	});
};

export const getNoteById = async (id, userId) => {
	const note = await prisma.note.findUnique({ where: { id } });

	if (!note || note.userId !== userId) {
		throw new AppError('Note not found', 404);
	}

	return note;
};

export const updateNote = async (id, userId, title, content, isDone) => {
	if (!id) {
		throw new AppError('ID format error', 400);
	}
	await getNoteById(id, userId);

	return prisma.note.update({
		where: { id },
		data: {
			title: title ?? undefined,
			content: content ?? undefined,
			isDone: isDone ?? undefined,
		},
	});
};

export const deleteNote = async (id, userId) => {
	await getNoteById(id, userId);

	await prisma.note.delete({ where: { id } });
};
