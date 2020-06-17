const faker = require('faker');
const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

factory.define('User', User, {
  id: 1,
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
});

module.exports = factory;