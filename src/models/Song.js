import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  releaseDate: {
    type: Date,
    required: false,
  },
  duration: {
    type: Number, // duration in seconds
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Song = mongoose.model("Song", songSchema);

export default Song;
