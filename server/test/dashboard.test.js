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
  removeRecipeIngredients, removeIngredients, removeRecipes, removeUserActivity, createDailyPlan, removeDailyPlan
} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/web.js";
import {logger} from "../src/application/logging.js";

describe('GET /api/dashboard/today', function () {
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

  it('should can get dashboard for today', async () => {
    const token = await getToken();

    const result = await supertest(web)
      .get('/api/dashboard/today')
      .set('Authorization', `Bearer ${token}`)

    logger.info(result.body);

    expect(result.status).toBe(200);
  });
})