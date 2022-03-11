const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

/* Aqui, importamos nossa função que valida se o usuário está ou não autenticado */
const validateJWT = require('./auth/validateJWT');
const validateJWTUserId = require('./auth/validateJWTUserId');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.get('/api/posts', validateJWT, routes.getPosts);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.get('/api/users', routes.getUsers);
apiRoutes.post('/api/login', routes.login);
apiRoutes.get('/api/users/:userId', validateJWTUserId, routes.getUserById);

app.use(apiRoutes);

module.exports = app;