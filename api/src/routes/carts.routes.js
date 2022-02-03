import express from 'express';
import { ensureAuth } from '../middleware/token.middleware.js';

const router = express.Router();

import * as cartsController from '../controllers/carts.controller.js';

router
  .route('/')
  .get(ensureAuth, cartsController.get)
  .post(ensureAuth, cartsController.create);

router.route('/add').post(ensureAuth, cartsController.addGame);
router.route('/delete').delete(ensureAuth, cartsController.deleteGame);

export { router };
