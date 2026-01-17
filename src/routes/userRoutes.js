import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

// User routes
router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

export default router;
