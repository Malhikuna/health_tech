import {Router} from 'express';
import shoppingController from "../controller/shopping.controller.js";

export const shoppingRoutes = Router();

shoppingRoutes.get('/online', shoppingController.getOnlineShop);

shoppingRoutes.get('/nearby', shoppingController.getNearbyOfflineShop);