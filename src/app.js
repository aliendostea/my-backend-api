import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import photoRoutes from "./routes/photoRoutes.js";
import songRoutes from "./routes/songRoutes.js";
import likeRoutes from "./routes/likeRoutes.js";
import validateSiteKey from "./middleware/validateSiteKey.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routes
app.use("/api/users", userRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/songs", songRoutes);

// Apply API key validation specifically to likes routes
app.use("/api/likes", validateSiteKey, likeRoutes);

app.use(errorHandler);

export default app;
