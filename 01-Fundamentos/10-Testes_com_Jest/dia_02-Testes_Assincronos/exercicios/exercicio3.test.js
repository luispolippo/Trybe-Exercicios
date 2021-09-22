const { it, expect } = require('@jest/globals');

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

describe('Deve retornar nome do usuário a partir do ID passado', () => {
  it('Deve retornar nome do usuário se ID estiver correto', async () => {
    await expect(getUserName(2)).resolves.toBe('Paul');
  });
  it('Deve retornar erro se o ID não existir', async () => {
    expect.assertions(1);
    try {
      await getUserName(5);
    } catch (error) {
      expect(error.message).toBe('User with 5 not found.');
    }
  });
});
