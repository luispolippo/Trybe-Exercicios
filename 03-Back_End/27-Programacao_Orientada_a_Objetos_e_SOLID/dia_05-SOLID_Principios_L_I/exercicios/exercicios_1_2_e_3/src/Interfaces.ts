export interface CepAPI {
  getAddressByCEP(cep: string, num: number): Promise<string>;
  getCepByAddress(address: string, num: number): Promise<string>;
}