const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

exports.ensureAuthenticated = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Please authenticate using a valid token." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token." });
  }
};