const searchEmployee = require('./searchEmployee');

describe('Acha funcionário pelo ID', () => {
  it('Verifica se a função searchEmployee existe', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Verifica se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Verifica se acha funcionário quando for passado o ID', () => {
    expect(searchEmployee('8579-6', 'firstName')).toEqual({
      id: '8579-6',
      firstName: 'Ana',
    });
    expect(searchEmployee('4678-2', 'lastName')).toEqual({
      id: '4678-2',
      lastName: 'Dodds',
    });
    expect(searchEmployee('5569-4', 'specialities')).toEqual({
      id: '5569-4',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    })
  });
  it('Verifica se retorna um erro quando o id não é encontrado', () => {
    expect(() => { searchEmployee('0000-0', 'firstName') }).toThrow('ID não identificada');
  });
  it('Verifica se informação existe nos dados funcionario', () => {
    expect(() => { searchEmployee('8579-6', 'qualquercoisa') }).toThrow('Informação indisponível');
  });
});