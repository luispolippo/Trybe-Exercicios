import * as service from './service';
let { generateRandomNumber, toUpper, firstLetter, concatStrings } = service;

describe('Testa generateRandomNumber', () => {
  it("Se a função existe", () => {
    expect(generateRandomNumber).toBeDefined();
  })
  it("Se a função retorna 10 quando mockada e se é chamada", () => {
    generateRandomNumber = jest.fn().mockReturnValue(10);
    expect(generateRandomNumber).toHaveBeenCalledTimes(0)
    generateRandomNumber();
    expect(generateRandomNumber).toHaveBeenCalledTimes(1)
    expect(generateRandomNumber()).toBe(10)
    expect(generateRandomNumber).toHaveBeenCalledTimes(2);
  })
})

describe("Testa nova implementação da função", () => {
  it("Se a nova implementação foi aplicada", () => {
    generateRandomNumber = jest.fn().mockImplementation((a, b) => a / b);
    expect(generateRandomNumber).toHaveBeenCalledTimes(0);
    generateRandomNumber(2, 1);
    expect(generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(generateRandomNumber(10, 2)).toBe(5);
    expect(generateRandomNumber).toHaveBeenCalledWith(10, 2)
    expect(generateRandomNumber).toHaveBeenCalledTimes(2)
  })
})

describe('Testa nova implementação, reset e outra implementação', () => {
  it('Se nova implementação funciona e se é resetada', () => {
    generateRandomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(generateRandomNumber).toHaveBeenCalledTimes(0);
    generateRandomNumber(2, 2, 2);
    expect(generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(generateRandomNumber(2, 2, 2)).toBe(8);
    expect(generateRandomNumber).toHaveBeenCalledTimes(2);
    expect(generateRandomNumber).toHaveBeenCalledWith(2, 2, 2);

    generateRandomNumber.mockRestore()
    expect(generateRandomNumber(2, 2, 2)).toBe(undefined);

    generateRandomNumber = jest.fn().mockImplementation((a) => a*2);
    expect(generateRandomNumber).toHaveBeenCalledTimes(0)
    generateRandomNumber(2);
    expect(generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(generateRandomNumber(2)).toBe(4);
    expect(generateRandomNumber).toHaveBeenCalledTimes(2);
    expect(generateRandomNumber).toHaveBeenCalledWith(2);
  })
})

describe('Testa funcções e seus mocks', () => {
  it("Se os mocks das funções estão de acordo", () => {
    const toUpperFunc = jest.spyOn(service, 'toUpper').mockImplementation((string) => string.toLowerCase());
    firstLetter = jest.fn().mockImplementation((string) => string[string.length - 1]);
    concatStrings = jest.fn().mockImplementation((string1, string2, string3) => string1.concat(string2.concat(string3)));

    expect(toUpperFunc).toHaveBeenCalledTimes(0);
    expect(firstLetter).toHaveBeenCalledTimes(0);
    expect(concatStrings).toHaveBeenCalledTimes(0);

    expect(toUpperFunc("GUILHERME")).toBe('guilherme');
    expect(firstLetter('Guilherme')).toBe('e');
    expect(concatStrings('Guilherme', 'Polippo', 'Correa')).toBe('GuilhermePolippoCorrea');

    expect(toUpperFunc).toHaveBeenCalledTimes(1);
    expect(firstLetter).toHaveBeenCalledTimes(1);
    expect(concatStrings).toHaveBeenCalledTimes(1);

    toUpperFunc.mockRestore();
    expect(toUpper('guilherme')).toBe('GUILHERME');
  })
})