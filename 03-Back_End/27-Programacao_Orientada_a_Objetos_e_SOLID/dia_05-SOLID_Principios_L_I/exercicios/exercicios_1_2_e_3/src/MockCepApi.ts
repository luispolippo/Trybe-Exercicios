import { CepAPI } from './Interfaces';

export default class MockCepApi implements CepAPI {
  getAddressByCEP(cep: string, num: number): Promise<string> {
    throw new Error('Method not implemented.');
  }
  getCepByAddress(address: string, num: number): Promise<string> {
    throw new Error('Method not implemented.');
  }
}