import {Router} from 'express';
import dashboardController from "../controller/dashboard.controller.js";
import authorize from "../middleware/auth.middleware.js";

export const dashboardRoutes = Router();

dashboardRoutes.get('/today', authorize, dashboardController.getDashboardToday);
