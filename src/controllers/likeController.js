import Like from "../models/Like.js";

const addLike = async (req, res) => {
  try {
    const { itemId, itemType } = req.body;
    const userId = req.user.id;
    const originSite = req.siteContext.id;

    if (!itemId || !itemType) {
      return res.status(400).json({
        success: false,
        message: "itemId and itemType are required",
        error: { code: "MISSING_FIELDS" },
      });
    }

    if (!["Photo", "Song", "Note"].includes(itemType)) {
      return res.status(400).json({
        success: false,
        message: "Invalid itemType",
        error: { code: "INVALID_ITEM_TYPE" },
      });
    }

    const existingLike = await Like.findOne({ userId, itemId, originSite });

    if (existingLike) {
      return res.status(409).json({
        success: false,
        message: "Item already liked by this user",
        error: { code: "ALREADY_LIKED" },
      });
    }

    const like = await Like.create({
      userId,
      itemId,
      itemType,
      originSite,
    });

    res.status(201).json({
      success: true,
      message: "Like added successfully",
      data: like,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding like",
      error: { details: error.message },
    });
  }
};

const removeLike = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const originSite = req.siteContext.id;

    const like = await Like.findOneAndDelete({
      _id: id,
      userId,
      originSite,
    });

    if (!like) {
      return res.status(404).json({
        success: false,
        message: "Like not found",
        error: { code: "NOT_FOUND" },
      });
    }

    res.status(200).json({
      success: true,
      message: "Like removed successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error removing like",
      error: { details: error.message },
    });
  }
};

const getLikes = async (req, res) => {
  try {
    const { itemId } = req.params;
    const originSite = req.siteContext.id;

    const likes = await Like.find({ itemId, originSite }).populate("userId", "username");

    const count = likes.length;

    res.status(200).json({
      success: true,
      message: "Likes retrieved successfully",
      data: {
        count,
        likes,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving likes",
      error: { details: error.message },
    });
  }
};

const getUserLikes = async (req, res) => {
  try {
    const { userId } = req.params;
    const originSite = req.siteContext.id;

    const likes = await Like.find({ userId, originSite }).populate("itemId");

    res.status(200).json({
      success: true,
      message: "User likes retrieved successfully",
      data: likes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving user likes",
      error: { details: error.message },
    });
  }
};

export default {
  addLike,
  removeLike,
  getLikes,
  getUserLikes,
};
