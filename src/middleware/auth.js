import jwt from "jsonwebtoken";

export default (req, res, next) => {
  // Middleware to check if the user is authenticated
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "No token provided, authorization denied." });
  }

  // Verify token (this is a placeholder, implement your token verification logic)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid." });
  }
};
