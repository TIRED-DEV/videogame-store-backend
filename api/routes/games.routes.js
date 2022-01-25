import express from 'express';

const router = express.Router();

import * as gamesController from '../controllers/games.controllers.js';

router.route('/').get(gamesController.get);

export { router };
