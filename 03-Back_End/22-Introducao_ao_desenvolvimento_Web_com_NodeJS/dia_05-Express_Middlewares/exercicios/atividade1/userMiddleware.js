const express = require('express');
const router = express.Router();

const validateUser = (req, res, next) => {
  const { username, email, password } = req.body;
  const emailRegex = /[a-z0-9.]+@[a-z0-9]+\.com/i
  const isUsernameValid = username.length > 3;
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = password.toString().length >= 4 && password.toString().length <=8 
    && typeof password === 'number';
  if (!(isUsernameValid && isEmailValid && isPasswordValid)) {
    return res.status(400).json({message: 'invalid data'});
  }

  next();
}

const validateLogin = (req, res, next) => {
  const {email, password} = req.body;
  const emailRegex = /[a-z0-9.]+@[a-z0-9]+\.com/i
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = password.toString().length >= 4 && password.toString().length <=8 
    && typeof password === 'number';
  
  if (!(isEmailValid && isPasswordValid)) {
    return res.status(400).json({message: 'email or password is incorrect'});
  }

  next();
}

const geraToken = () => {
  let string = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 12; i += 1) {
    string += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return string;
}

router.post('/register', validateUser, (_req, res, _next) => {
  return res.status(201).json({message: 'user created'});
});

router.post('/login', validateLogin, (req, res) => {
  const token = geraToken();
  return res.status(200).json({token: token});
});

module.exports = router;