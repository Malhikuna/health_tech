import {Router} from 'express';
import userController from '../controller/user.controller.js'
import authorize from "../middleware/auth.middleware.js";

const userRoutes = Router();

/* Mendapatkan data user yang sedang login*/
userRoutes.get('/current', authorize, userController.getUserCurrent);

userRoutes.post('/program', authorize, userController.createUserProgram);

export {
  userRoutes,
}