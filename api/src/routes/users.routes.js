import express from 'express';

const router = express.Router();

import * as usersController from '../controllers/users.controllers.js';
import { ensureAuth } from '../middleware/token.middleware.js';

router
  .route('/')
  .get(ensureAuth, usersController.get)
  .post(usersController.login)
  .put(ensureAuth, usersController.update);
router.route('/register').post(usersController.register);
router.route('/search/:name').get(usersController.search);

export { router };
