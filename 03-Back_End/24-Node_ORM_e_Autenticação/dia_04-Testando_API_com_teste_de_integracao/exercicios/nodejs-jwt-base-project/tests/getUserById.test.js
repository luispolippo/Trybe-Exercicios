const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../src/api/app');

chai.use(chaiHttp);

const { User } = require('../src/models');

const { User: userMock } = require('./mock/models');

describe('Rota GET /api/users/:userId', () => {
  const ID = 1;

  before(() => {
    sinon.stub(User, 'findOne')
      .callsFake(userMock.findOne)
  });

  after(() => {
    User.findOne.restore();
  });

  describe('Caso não seja fornecido um token', () => {
    let response;
    before(async () => {
      response = await chai
        .request(server)
        .get(`/api/users/${ID}`)
    });

    it('o status da resposta deve ser 400', () => {
      expect(response).to.have.status(400);
    });

    it(`o corpo da resposta deve ser um objeto com o parametro 
    error e o valor "Token não encontrado"`, () => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('error');
      expect(response.body.error).to.be.equal('Token não encontrado');
    });
  });

  describe('Caso usuario não tenha o mesmo "id" da "authorization"', () => {
    let response;
    let token;
    const loginBody = {
      "username": "Kássia Lemmer",
      "password": "kelimmar"
    }

    before(async () => {
      token = await chai
        .request(server)
        .post('/api/login')
        .send(loginBody)
        .then(({ body: { token } }) => token);
      
      response = await chai
        .request(server)
        .get(`/api/users/${ID}`)
        .set('authorization', token);
    });

    it('o status da resposta deve ser 401', () => {
      expect(response).to.have.status(401);
    });

    it(`o corpo da resposta deve ser um objeto com o 
    parametro erro e a mensagem "Acesso negado"`, () => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('error');
      expect(response.body.error).to.be.equal('Acesso negado');
    });
  });

  describe('caso o usuario forneça um token valido e com o ID próprio', () => {
    let response;
    let token;
    const loginBody = {
      "username": "Saul Reixas",
      "password": "tocasaul"
    }

    const expectedResponse = {
        "id": 1,
        "username": "Saul Reixas",
        "password": "tocasaul"
    }

    before(async () => {
      token = await chai
        .request(server)
        .post('/api/login')
        .send(loginBody)
        .then(({ body: { token } }) => token);

      response = await chai
        .request(server)
        .get(`/api/users/${ID}`)
        .set('authorization', token);
    })

    it('o status da resposta deve ser 200', () => {
      expect(response).to.have.status(200);
    });

    it('o corpo da resposta deve ter os dados do usuario que fez a requisicao', () => {
      expect(response.body).to.be.deep.equal(expectedResponse);
    });
  })
});