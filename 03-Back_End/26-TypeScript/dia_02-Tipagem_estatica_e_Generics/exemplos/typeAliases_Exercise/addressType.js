function printAddress(address) {
    console.log("".concat(address.street, ", ").concat(address.number));
    console.log(address.city);
    console.log(address.state);
}
printAddress({ street: 'Rua Natal', number: 64, city: 'Canoas', state: 'RS' });
