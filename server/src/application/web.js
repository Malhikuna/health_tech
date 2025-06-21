import express from 'express';
import {authRoutes} from "../route/auth.routes.js";
import {errorMiddleware} from "../middleware/error.middleware.js";
import {userRoutes} from "../route/user.routes.js";

export const web = express();

web.use(express.json());

web.use('/api/auth', authRoutes);

web.use('/api/user', userRoutes);

web.use(errorMiddleware);