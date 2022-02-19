const CEP = require('../models/CEP');

const validaCEP = (cep) => {
  const regex = /[0-9]{5}-?[0-9]{3}/;
  if (!(regex.test(cep))) return { error: { code: 'invalidData', message: 'CEP inválido' } };
  return null;
}

const removeHyphen = (cep) => {
  if (cep.includes('-')) {
    const newCEP = cep.replace('-', '');
    return newCEP;
  }

  return cep;
}

const getByCEP = async (cep) => {
  const error = validaCEP(cep);
  if (error) return error;

  const newCEP = removeHyphen(cep);

  const address = await CEP.getByCEP(newCEP);
  return address;
}

module.exports = {
  getByCEP,
}