import {Router} from "express";
import progressController from "../controller/progress.controller.js";
import authorize from "../middleware/auth.middleware.js";

export const progressRoutes = Router();

progressRoutes.post('/log-meal', authorize, progressController.createLogMeal);