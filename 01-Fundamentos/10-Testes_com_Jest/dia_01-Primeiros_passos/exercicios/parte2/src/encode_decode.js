const encode = (string) => {
  const obj = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  const keys = Object.keys(obj);
  const chars = string.split('');
  return chars
    .map((char) => {
      keys.forEach((key) => {
        if (char === key) char = obj[key];
      });
      return char;
    }).join(''); 
};

const decode = (string) => {
  const obj = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  const keys = Object.keys(obj);
  const chars = string.split('');
  return chars.map((char) => {
    keys.forEach((key) => {
      if (char === obj[key].toString()) char = key; 
    });
    return char;
  }).join('');
};

module.exports = {encode, decode}
