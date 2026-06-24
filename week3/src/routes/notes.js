import { Router } from 'express';
import * as notesController from '../controllers/notes.js';

const notesRouter = Router();

notesRouter.get('/', notesController.getAll);
notesRouter.post('/', notesController.create);
notesRouter.get('/:id', notesController.getById);
notesRouter.put('/:id', notesController.update);
notesRouter.delete('/:id', notesController.remove);

export default notesRouter;
