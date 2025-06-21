import {removeTestUser, createTestUser} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/web.js";
import {logger} from "../src/application/logging.js";

describe('GET /api/users/current', function () {

  afterEach(async () => {
    await removeTestUser();
  })

  it('should can get current user', async () => {
    const result1 = await supertest(web)
      .post('/api/auth/register')
      .send({
        email: 'test@test.com',
        password: 'rahasia',
        first_name: 'test',
        last_name: 'test'
      });

    logger.info(result1.body.data.token);

    const result2 = await supertest(web)
      .get('/api/user/current')
      .set('Authorization', `Bearer ${result1.body.data.token}`)

    logger.info(result2.body);

    expect(result2.status).toBe(200);

    expect(result2.body.data.email).toBe("test@test.com");
    expect(result2.body.data.first_name).toBe("test");
  });
})