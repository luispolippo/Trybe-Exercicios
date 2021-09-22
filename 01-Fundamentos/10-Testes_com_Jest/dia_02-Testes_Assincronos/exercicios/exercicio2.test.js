
const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) =>
  new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id);

    if (result) {
      return resolve(result);
    }

    return reject(new Error(`User with ${id} not found.`));
  });

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('Deve retornar o usuário a partir do ID passado', () => {
  it('Deve retornar o nome do usuário se o ID existir', () => {
    return getUserName(1).then((name) => {
      expect(name).toBe('Mark');
    });
  });
  it('Deve retornar um erro casoo id não exista', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) => {
      expect(error.message).toMatch('User with 3 not found.')
    })
  });
});
