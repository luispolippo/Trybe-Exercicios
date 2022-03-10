const jwt = require('jsonwebtoken');
require('dotenv').config();

const { secret } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ 
      error: {
        message: 'Token not found',
      } });
  }
  try {
    const decoded = jwt.verify(authorization, secret);
    
    req.user = decoded.data;
    
    next();
  } catch (e) {
    return res.status(401).json({
      error: {
        message: e.message,
      },
    });
  }
};