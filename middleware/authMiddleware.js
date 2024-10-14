const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if the token is provided
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using a secret key
    const decoded = jwt.verify(token, 'yourSecretKey'); // Replace 'yourSecretKey' with your actual secret

    // Attach the user data from the token to the request object
    req.user = decoded.user;

    // Call next() to move to the next middleware or route handler
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
