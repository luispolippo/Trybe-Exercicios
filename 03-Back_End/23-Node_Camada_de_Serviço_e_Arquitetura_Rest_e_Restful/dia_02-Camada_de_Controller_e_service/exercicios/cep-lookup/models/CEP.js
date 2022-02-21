const connection = require('./connection');

const getByCEP = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const [address] = await connection.execute(query, [cep]);
  return address;
};

const addCEP = async (cep, logradouro, bairro, localidade, uf) => {
  const query = `INSERT INTO 
    cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
    VALUES (?, ?, ?, ?, ?);`;
  await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);  
  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  }
}

module.exports = {
  getByCEP,
  addCEP,
}