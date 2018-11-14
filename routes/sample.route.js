import express from 'express';
import sampleController from '../controllers/sample.controller';

const router = express.Router();

router.get('/', sampleController.testController);

export default router;
