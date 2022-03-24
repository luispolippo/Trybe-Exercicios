type Address = {
  street: string;
  number: number;
  city: string;
  state: string;
}

function printAddress(address: Address) {
  console.log(`${address.street}, ${address.number}`);
  console.log(address.city);
  console.log(address.state);
}

printAddress({ street: 'Rua Natal', number: 64, city: 'Canoas', state: 'RS' });