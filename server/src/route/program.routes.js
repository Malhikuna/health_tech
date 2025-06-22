import {Router} from 'express'
import programController from "../controller/program.controller.js";

export const programRoutes = Router();

programRoutes.use('/', programController.getPrograms);

programRoutes.get('/:id', programController.getProgram);