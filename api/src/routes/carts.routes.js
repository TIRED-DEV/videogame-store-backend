import express from 'express';

const router = express.Router();

import * as cartsController from '../controllers/carts.controller.js';

router.route('/').get(cartsController.get);

export { router };
