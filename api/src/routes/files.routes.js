import express from 'express';
import { ensureAuth } from '../middleware/token.middleware.js';

const router = express.Router();

import * as filesController from '../controllers/files.controllers.js';

router.route('/').post(ensureAuth, filesController.upload);
router.route('/:file').get(ensureAuth, filesController.get);

export { router };
