import {Router} from "express";
import recipeController from "../controller/recipe.controller.js";
import authorize from "../middleware/auth.middleware.js";

export const recipeRoutes = Router();

recipeRoutes.get('/:id', authorize, recipeController.getRecipe);