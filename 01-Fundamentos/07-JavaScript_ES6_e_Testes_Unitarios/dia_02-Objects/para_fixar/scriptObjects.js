const addInObject = (object, key, value) => {
  object[key] = value;
  return object;
}

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
}

addInObject(customer, 'lastName', 'Ferreira');
console.log(customer);