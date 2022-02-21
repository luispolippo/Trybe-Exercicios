const Joi = require('joi');
const CEP = require('../models/CEP');

const CepValidationGet = (cep) => {
  const regex = /[0-9]{5}-?[0-9]{3}/;
  if (!(regex.test(cep))) return { error: { code: 'invalidData', message: 'CEP inválido' } };
  return null;
}

const AddressValidationPost = (cep, logradouro, bairro, localidade, uf) => {
  const { error } = Joi.object({
    cep: Joi.string().not().empty().regex(/[0-9]{5}-[0-9]{3}/).required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate({ cep, logradouro, bairro, localidade, uf });
  return error;
};

const removeHyphen = (cep) => {
  if (cep.includes('-')) {
    const newCEP = cep.replace('-', '');
    return newCEP;
  }

  return cep;
}

const cepAlreadyExists = async (cep) => {
  const newCEP = removeHyphen(cep);
  const address = await CEP.getByCEP(newCEP);
  return address.length === 0 ? false : true
}

const getByCEP = async (cep) => {
  const error = CepValidationGet(cep);
  if (error) return error;

  const newCEP = removeHyphen(cep);

  const address = await CEP.getByCEP(newCEP);

  if(address.length === 0) return { error: { code: 'notFound', message: 'CEP não encontrado' } };

  return address;
}

const addCEP = async (cep, logradouro, bairro, localidade, uf) => {
  const error = AddressValidationPost(cep, logradouro, bairro, localidade, uf);
  if (error) return error;
  
  const newCep = removeHyphen(cep)

  if (await cepAlreadyExists(cep)) return { error: { code: 'alreadyExists', message: 'CEP já existente' } };

  const addedAddress = await CEP.addCEP(newCep, logradouro, bairro, localidade, uf);
  return addedAddress;
}

module.exports = {
  getByCEP,
  addCEP
}