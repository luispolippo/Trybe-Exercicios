const addEmployees = (nomeCompleto) => {
  const nomeEmail = nomeCompleto.toLowerCase().replace(" ", "_");
  const objEmploy = {
    nomeCompleto, 
    email: `${nomeEmail}@trybe.com`
  }
  return objEmploy;
}

const newEmployees = () => {
  const employees = {
    id1: addEmployees('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: addEmployees('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: addEmployees('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());