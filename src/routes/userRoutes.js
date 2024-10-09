import express from 'express';
import { createUserController, getAllUsersController, updateUserController, deleteUserController } from '../controllers/userController';

const router = express.Router();

router.post("/users", createUserController);
router.get("/users", getAllUsersController);
router.put("/users/:id", updateUserController);
router.delete("/users/:id", deleteUserController);

export default router;
