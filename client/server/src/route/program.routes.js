import {Router} from 'express'
import programController from "../controller/program.controller.js";

export const programRoutes = Router();

programRoutes.get('/', programController.getPrograms);

programRoutes.get('/:id', programController.getProgram);