const myFizzBuzz = require('../src/myFizzBuzz');

describe('recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
  it('Verifica retorno quando num for divisivel por 3 e por 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Verifica o retorno quando for divisivel por 3', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  it('Verifica o retorno quando for divisivel por 5', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  });
  it('Verifica se retorna o próprio numero quando não for divisivel por 3 nem por 5', () => {
    expect(myFizzBuzz(1)).toBe(1);
  });
  it('Verifica se retorna false quando o prâmetro não é um número', () => {
    expect(myFizzBuzz('oi')).toBe(false);
  });
});