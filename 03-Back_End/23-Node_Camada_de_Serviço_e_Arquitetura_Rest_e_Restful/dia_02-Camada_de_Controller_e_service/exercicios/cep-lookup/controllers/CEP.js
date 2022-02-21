const CEP = require('../service/CEP');

const getByCEP = async (req, res, next) => {
  const { cep }  = req.params;
  const address = await CEP.getByCEP(cep);

  if (!(address.error)) return res.status(200).json(address);

  next(address);
}

const addCEP = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const addedAddress = await CEP.addCEP(cep, logradouro, bairro, localidade, uf);
  if (!(addedAddress.details) && !(addedAddress.error)) return res.status(201).json(addedAddress);
  next(addedAddress);
}

module.exports = {
  getByCEP,
  addCEP,
}