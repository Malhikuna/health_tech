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
  beforeEach(async () => {
    await createTestUser();
    await createProgram();
    await createUserProgram();
    await createRecipes();
    await createIngredients();
    await createRecipeIngredients();
    await createDailyPlan();
  })

  afterEach(async () => {
    await removeDailyPlan();
    await removeRecipeIngredients();
    await removeIngredients()
    await removeRecipes();
    await removeUserActivity();
    await removeUserProgram();
    await removeProgram();
    await removeTestUser();
  })

  it('should can get recipe detail', async () => {
    const token = await getToken();
    const {breakfast_recipe_id} = await getDailyPlan();

    const {id: recipeId} = await prismaClient.recipe.findUnique({
      where: {
        id: breakfast_recipe_id
      }
    });

    const result = await supertest(web)
      .get(`/api/recipe/${recipeId}`)
      .set('Authorization', `Bearer ${token}`)

    logger.info(result.body);

    expect(result.status).toBe(200);
  });
})