import express from 'express';
import notesRouter from './routes/notes.js';
import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';

const app = express();

app.use(express.json());

app.use('/api/notes', notesRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	res.status(statusCode).json({ error: err.message });
});

export default app;
