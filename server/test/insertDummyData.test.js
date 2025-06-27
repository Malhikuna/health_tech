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
  createUserActivity,
} from "./test-util.js";

describe("Insert Data", function () {
  beforeEach(async () => {
    await createTestUser();
    await createProgram();
    await createUserProgram();
    await createUserActivity();
    await createRecipes();
    await createIngredients();
    await createRecipeIngredients();
    await createDailyPlan();
  });

  it("should can insert data", async () => {});
});

describe("Delete Data", function () {
  beforeEach(async () => {
    await removeDailyPlan();
    await removeRecipeIngredients();
    await removeIngredients();
    await removeRecipes();
    await removeUserActivity();
    await removeUserProgram();
    await removeProgram();
    await removeTestUser();
  });

  it("should can insert data", async () => {});
});
