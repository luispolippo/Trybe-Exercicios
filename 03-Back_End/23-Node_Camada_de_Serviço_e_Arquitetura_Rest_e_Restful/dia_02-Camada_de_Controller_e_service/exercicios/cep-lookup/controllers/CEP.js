const CEP = require('../service/CEP');

const getByCEP = async (req, res) => {
  const { cep }  = req.params;
  const address = await CEP.getByCEP(cep);

  if (address.error) return res.status(400).json(address);

  res.status(200).json(address);
}

module.exports = {
  getByCEP,
}