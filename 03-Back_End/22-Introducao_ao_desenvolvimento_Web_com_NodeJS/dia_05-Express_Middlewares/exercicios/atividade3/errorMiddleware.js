const handleRouterError = (err, req, res, next) => {
  res.status(404).json({message: "opss, rout not found!"});
}

module.exports = handleRouterError;