const pokeTips = require('./aulaCallback');

test('Retorna o melhor pokemon para começar.', (done) => {
  const callback = (data) => {
    try {
      expect(data).toBe('Pikachu é o melhor pokémon para começar.');
      done();
    } catch(error) {
      done(error);
    }
  };
  pokeTips(callback);
});
