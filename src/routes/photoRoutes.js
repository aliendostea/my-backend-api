import express from "express";
import photoController from "../controllers/photoController.js";

const router = express.Router();

// Define routes for photo-related API endpoints
router.post("/photos", photoController.uploadPhoto);
router.get("/photos/:id", photoController.getPhotos);
router.delete("/photos/:id", photoController.deletePhoto);

export default router;
