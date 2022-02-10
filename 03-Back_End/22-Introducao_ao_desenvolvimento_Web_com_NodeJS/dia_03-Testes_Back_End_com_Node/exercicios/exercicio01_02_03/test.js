const whatIsThisNumber = require('./exercicio');
const { expect } = require('chai');

const POSITIVO = 'positivo';
const NEGATIVO = 'negativo';
const NEUTRO = 'neutro';

describe('A função deve', () => {

  it('retornar string positivo com numero maior que 0', () => {
    const resposta = whatIsThisNumber(1);
    expect(resposta).to.be.equal(POSITIVO);
  });

  it('retornar string negativo com numero menor que 0', () => {
    const resposta = whatIsThisNumber(-1);
    expect(resposta).to.be.equal(NEGATIVO);
  })

  it('retornar string neutro com numero igual a 0', () => {
    const resposta = whatIsThisNumber(0);
    expect(resposta).to.be.equal(NEUTRO);
  })

  it('retorna Erro se o parametro nao for numero', () => {
    expect(() => whatIsThisNumber('1')).to.throw('parametro deve ser um numero');
  })
})





