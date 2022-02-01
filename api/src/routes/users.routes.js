import express from 'express';

const router = express.Router();

import * as usersController from '../controllers/users.controllers.js';

router.route('/').post(usersController.login);
router.route('/register').post(usersController.register);

export { router };
