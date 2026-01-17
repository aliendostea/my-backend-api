import mongoose from "mongoose";

const apiKeySchema = new mongoose.Schema(
  {
    siteId: { type: String, required: true, unique: true },
    siteName: { type: String, required: true },
    apiKey: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
    allowedOrigins: [String],
  },
  { timestamps: true }
);

export default mongoose.model("ApiKey", apiKeySchema);
