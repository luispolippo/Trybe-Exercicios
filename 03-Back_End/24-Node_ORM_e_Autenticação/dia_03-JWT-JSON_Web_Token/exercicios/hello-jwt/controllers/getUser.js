module.exports = async (req, res) => {
  const { user } = req;

  return res.status(200).json({
    username: user.username,
    admin: user.admin,
  });
};