import express from 'express';

const router = express.Router();

import * as cartsController from '../controllers/carts.controller.js';

router.route('/').get(cartsController.get).post(cartsController.create);

export { router };
