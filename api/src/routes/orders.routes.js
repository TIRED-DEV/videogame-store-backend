import express from 'express';
import { ensureAuth } from '../middleware/token.middleware.js';

const router = express.Router();

import * as ordersController from '../controllers/orders.controllers.js';

router.route('/').get(ensureAuth, ordersController.get);
router.route('/confirm').post(ensureAuth, ordersController.confirmOrder);

export { router };
