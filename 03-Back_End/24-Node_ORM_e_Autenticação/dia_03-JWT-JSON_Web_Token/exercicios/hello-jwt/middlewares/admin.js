module.exports = (req, res, next) => {
  const { user } = req;

  if (!user.admin) {
    return res.status(403).json({ 
      error: {
        message: 'Restrict access',
      },
    });
  }

  next();
};