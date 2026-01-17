import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    itemType: { type: String, enum: ["Photo", "Song", "Note"], required: true },
    itemId: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: "itemType" },
    originSite: { type: String, required: true },
  },
  { timestamps: true },
);

likeSchema.index({ itemId: 1, originSite: 1 });

export default mongoose.model("Like", likeSchema);
