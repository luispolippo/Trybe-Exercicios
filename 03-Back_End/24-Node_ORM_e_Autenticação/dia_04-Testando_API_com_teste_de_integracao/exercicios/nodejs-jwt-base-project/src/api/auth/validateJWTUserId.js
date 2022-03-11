const jwt = require('jsonwebtoken');
const { User } = require('../../models');

const segredo = 'seusecretdetoken';

module.exports = async (req, res, next) => {
  const token = req.headers['authorization'];
  const { userId } = req.params;

  if (!token) {
    return res.status(400).json({ error: 'Token não encontrado' });
  };

  try {
    const decoded = jwt.verify(token, segredo);

    const user = await User.findOne({ where: { username: decoded.data.username } });

    if (user.id !== parseInt(userId)) {
      return res.status(401).json({ error: 'Acesso negado' });
    }

    req.user = user;

    next();
  } catch (e) {
    return res.status(401).json({ message: e.message });
  }
}