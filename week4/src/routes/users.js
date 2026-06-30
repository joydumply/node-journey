import { Router } from 'express';
import * as usersController from '../controllers/users.js';

const usersRouter = Router();

usersRouter.get('/:id', usersController.getByID);
usersRouter.post('/', usersController.create);

export default usersRouter;
