import express from 'express';
import { ensureAuth } from '../middleware/token.middleware.js';

const router = express.Router();

import * as cartsController from '../controllers/carts.controller.js';

router
  .route('/')
  .get(ensureAuth, cartsController.get)
  .post(ensureAuth, cartsController.create)
  .delete(ensureAuth, cartsController.deleteGame);

router.route('/add').post(ensureAuth, cartsController.addGame);

export { router };
