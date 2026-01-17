import express from "express";
import songController from "../controllers/songController.js";

const router = express.Router();

// Define routes for song-related API endpoints
router.post("/", songController.createSong); // Create a new song
router.get("/", songController.getAllSongs); // Retrieve all songs
router.get("/:id", songController.getSongById); // Retrieve a specific song by ID
router.put("/:id", songController.updateSong); // Update a specific song by ID
router.delete("/:id", songController.deleteSong); // Delete a specific song by ID

export default router;
