const jwt = require("jsonwebtoken");

function requireToken(req, res, next) {
  const token = req.headers.authorization;
  const tokenValue = token?.replace(/^Bearer\s+/i, '');
  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  jwt.verify(tokenValue, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid" });
    }

    next();
  });
}

module.exports = { requireToken };
