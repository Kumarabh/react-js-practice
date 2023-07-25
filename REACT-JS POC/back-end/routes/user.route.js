import express from 'express';
import {getAllUsers, createUser, updateUser, deleteUser, getUserById} from '../controllers/user.controller.js';
const router = express.Router();

router.route('/')
.get(getAllUsers)
.post(createUser)

router.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)

export default router