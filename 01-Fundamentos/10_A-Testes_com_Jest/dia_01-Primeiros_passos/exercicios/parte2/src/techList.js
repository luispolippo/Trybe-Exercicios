function techList(list, name) {
  if (list.length === 0) return 'Vazio!';
  list.sort();
  return list.reduce((actual, curr) => {
    const obj = { tech: curr, name: name };
    actual.push(obj);
    return actual;
  }, []);
}

/* console.log(typeof techList) */

module.exports = techList;
