const connection = require('./connection');

const getByCEP = async (cep) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const [address] = await connection.execute(query, [cep]);
  return address;
};

module.exports = {
  getByCEP,
}