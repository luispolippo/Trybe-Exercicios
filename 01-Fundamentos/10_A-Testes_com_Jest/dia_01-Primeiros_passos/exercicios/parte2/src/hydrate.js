const hydrate = (string) => {
  const regex = /\d+/g;
  const nums = string.match(regex);
  const sum = nums.reduce((act, curr) => act + parseInt(curr), 0);
  return sum > 1 ? `${sum} copos de água` : `${sum} copo de água`;  
};

console.log(hydrate('1 cachaça'));

module.exports = hydrate;