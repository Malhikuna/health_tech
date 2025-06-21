import {Router} from 'express'
import authController from '../controller/auth.controller.js'

const authRoutes = Router();

authRoutes.post('/register', authController.register);

authRoutes.post('/login', authController.login);

authRoutes.post('/logout', authController.logout);

export {
  authRoutes
}