import {Router} from 'express';
import userController from '../controller/user.controller.js'
import authorize from "../middleware/auth.middleware.js";

const userRoutes = Router();

/* Mendapatkan data user berdasarkan id */
userRoutes.get('/current', authorize, userController.getUserCurrent);

export {
  userRoutes,
}