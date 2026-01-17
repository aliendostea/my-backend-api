const validateSiteKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(403).json({ error: "Missing API key" });
  }

  // Map environment variable keys to site IDs
  const siteKeyMap = {
    [process.env.SITE_KEY_WEB_1]: "web-1",
    [process.env.SITE_KEY_WEB_2]: "web-2",
    [process.env.SITE_KEY_WEB_3]: "web-3",
  };

  const siteId = siteKeyMap[apiKey];

  if (!siteId) {
    return res.status(403).json({ error: "Invalid API key" });
  }

  // Attach site context to request
  req.siteContext = {
    id: siteId,
    key: apiKey,
  };

  next();
};

module.exports = validateSiteKey;
