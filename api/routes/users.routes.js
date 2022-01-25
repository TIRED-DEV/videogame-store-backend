import express from 'express';

const router = express.Router();

import * as usersController from '../controllers/users.controllers.js';

router.route('/').get(usersController.get);

export { router };
