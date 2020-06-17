const routes = require('express').Router();
const { User } = require('./app/models');

const authMiddleare = require('./app/middleware/auth');

const SessionController = require('./app/controllers/SessionController');

routes.post('/sessions', SessionController.store);

routes.use(authMiddleare);

routes.get('/dashboard', (req, res) => {
  return res.status(200).send();
});

module.exports = routes;