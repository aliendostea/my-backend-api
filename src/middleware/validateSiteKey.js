import ApiKey from "../models/ApiKey.js";

const validateSiteKey = async (req, res, next) => {
  try {
    const apiKey = req.headers["x-api-key"];

    if (!apiKey) {
      return res.status(401).json({
        success: false,
        message: "Missing API key in headers",
        error: { code: "MISSING_API_KEY" },
      });
    }

    const siteCredentials = await ApiKey.findOne({ apiKey, isActive: true });

    if (!siteCredentials) {
      return res.status(403).json({
        success: false,
        message: "Invalid or inactive API key",
        error: { code: "INVALID_API_KEY" },
      });
    }

    req.siteContext = {
      id: siteCredentials.siteId,
      name: siteCredentials.siteName,
    };

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error validating API key",
      error: { details: error.message },
    });
  }
};

export default validateSiteKey;
