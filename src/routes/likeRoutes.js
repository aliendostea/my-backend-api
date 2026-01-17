import express from "express";
import likeController from "../controllers/likeController.js";

const router = express.Router();

// Route to like an item
router.post("/like", likeController.likeItem);

// Route to unlike an item
router.delete("/unlike/:id", likeController.unlikeItem);

// Route to get likes for an item
router.get("/likes/:itemId", likeController.getLikes);

// Route to get all likes by a user
router.get("/user/:userId", likeController.getLikes);

export default router;
