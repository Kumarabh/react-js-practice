import express from 'express';
import {getAllData} from '../controllers/side-bar.controller.js';
const router = express.Router();

router.route('/')
.get(getAllData)

export default router