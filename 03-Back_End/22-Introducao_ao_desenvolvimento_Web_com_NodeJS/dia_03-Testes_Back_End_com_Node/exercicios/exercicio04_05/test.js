const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const writeInFile = require('./exercicio');

const ARQUIVO = 'arquivo.txt';
const CONTEUDO = 'Olá, mundo';

describe('Função após escrever deve', () => {

  before(() => {
    sinon.stub(fs, 'writeFileSync').returns(CONTEUDO);
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('retornar uma string', () => {
    const resposta = writeInFile(ARQUIVO, CONTEUDO);
    expect(resposta).to.be.a('string');
  });

  it('retornar a string OK', () => {
    const resposta = writeInFile(ARQUIVO, CONTEUDO);
    expect(resposta).to.be.equal('OK');
  })
})

describe('Função deve retornar null', () => {

  before(() => {
    sinon
      .stub(fs, 'writeFileSync')
      .throws(new Error('arquivo nao encontrado'));
  });

  after(() => {
    fs.writeFileSync.restore();
  })

  it('se arquivo não existir', () => {
    const resposta = writeInFile(ARQUIVO, CONTEUDO);
    expect(resposta).to.be.equal(null);
  })
})
