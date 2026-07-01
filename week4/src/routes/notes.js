import { Router } from 'express';
import * as notesController from '../controllers/notes.js';
import { isTokenValid } from '../middlewares/auth.js';

const notesRouter = Router();

notesRouter.get('/', isTokenValid, notesController.getAll);
notesRouter.post('/', isTokenValid, notesController.create);
notesRouter.get('/:id', isTokenValid, notesController.getById);
notesRouter.put('/:id', isTokenValid, notesController.update);
notesRouter.delete('/:id', isTokenValid, notesController.remove);

export default notesRouter;
