import {
  removeTestUser,
  createTestUser,
  getToken,
  createProgram,
  removeProgram,
  removeUserProgram,
  createUserProgram,
  createRecipes,
  createIngredients,
  createRecipeIngredients,
  removeRecipeIngredients,
  removeIngredients,
  removeRecipes,
  removeUserActivity,
  createDailyPlan,
  removeDailyPlan,
  getProgram, getUserProgram, getDailyPlan
} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/web.js";
import {logger} from "../src/application/logging.js";
import {prismaClient} from "../src/application/database.js";

describe('GET /api/recipe/:id', function () {

  it('should can get recipe detail', async () => {
    const result = await supertest(web)
      .get('/api/shopping/online')
      .query({
        nama_bahan: 'Dada Ayam Fillet'
      })

    logger.info(result.body);

    expect(result.status).toBe(200);
  });
})