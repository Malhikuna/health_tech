import express from 'express';
import {authRoutes} from "../route/auth.routes.js";
import {errorMiddleware} from "../middleware/error.middleware.js";
import {userRoutes} from "../route/user.routes.js";
import {programRoutes} from "../route/program.routes.js";
import {dashboardRoutes} from "../route/dashboard.routes.js";
import {progressRoutes} from "../route/progress.routes.js";
import {recipeRoutes} from "../route/recipe.routes.js";
import cors from "cors";

export const web = express();

web.use(cors());

web.use(express.json());

web.use('/api/auth', authRoutes);

web.use('/api/user', userRoutes);

web.use('/api/program', programRoutes);

web.use('/api/dashboard', dashboardRoutes);

web.use('/api/progress', progressRoutes);

web.use('/api/recipe', recipeRoutes);

web.use(errorMiddleware);