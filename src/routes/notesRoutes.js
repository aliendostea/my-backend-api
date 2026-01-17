import express from "express";
import notesController from "../controllers/notesController.js";

const router = express.Router();

router.post("/", notesController.addNote); // Create a new note
router.get("/", notesController.getNotes); // Retrieve all notes
router.put("/:id", notesController.editNote); // Update a specific note by ID
router.delete("/:id", notesController.deleteNote); // Delete a specific note by ID
export default router;
