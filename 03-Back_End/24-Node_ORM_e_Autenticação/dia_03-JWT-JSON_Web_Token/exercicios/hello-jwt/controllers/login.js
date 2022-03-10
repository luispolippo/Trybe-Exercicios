require('dotenv').config();
const jwt = require('jsonwebtoken');

const { secret } = process.env;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const admin = username === 'admin' && password === 's3nh4S3gur4???';

  const token = jwt.sign({ data: { username, admin } }, secret, jwtConfig);

  return res.status(200).json({ token });
};