import express from 'express';

const router = express.Router();

import * as usersController from '../controllers/users.controllers.js';

router.route('/cart').get(usersController.getCart);
router.route('/orders').get(usersController.getOrders);

export { router };
