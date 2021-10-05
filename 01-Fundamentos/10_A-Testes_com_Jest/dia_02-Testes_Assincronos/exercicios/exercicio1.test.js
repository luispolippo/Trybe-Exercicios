const { it, expect } = require('@jest/globals');

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Deve transformar as letras da palavra em maiúsculas', (done) => {
  uppercase('teste', (result) => {
    try {
      expect(result).toBe('TESTE');
      done();
    } catch (error) {
      done(error);
    }
  });
});
