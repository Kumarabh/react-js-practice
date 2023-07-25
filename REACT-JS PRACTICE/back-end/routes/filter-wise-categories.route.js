import express from 'express';
import {getAllData} from '../controllers/filter-wise-categories.controller.js';
const router = express.Router();

router.route('/')
.get(getAllData)

export default router