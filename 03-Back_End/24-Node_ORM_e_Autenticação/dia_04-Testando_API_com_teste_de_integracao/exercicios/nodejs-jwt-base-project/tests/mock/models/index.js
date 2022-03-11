const Users = require('./Users.json');

const mockCreate = (Instance, data) => {
  if (!data) {
    return;
  }

  const newData = data;
  if (!!Instance[0].id) {
    newData.id = Date.now();
  }
  Instance.push(newData);
  return newData;
};

const mockFindOne = (Instance, where) => {
  if (!where) {
    return;
  }

  const user = Instance.find(({ username }) => where.username === username);

  return user;
};

const User = {
  create: async (data) => mockCreate(Users, data),
  findAll: async () => Users,
  findOne: async ({ where }) => mockFindOne(Users, where),
};

module.exports = {
  User,
}