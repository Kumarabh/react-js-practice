import express from 'express';
import {getAllData} from '../controllers/dealer-wise-claim-chart.controller.js';
const router = express.Router();

router.route('/')
.get(getAllData)

export default router