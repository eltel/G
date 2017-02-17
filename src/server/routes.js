'use strict';

const bodyParser = require('body-parser');
const AuthApi = require('./apis/auth');
const Api = require('./apis');

module.exports = function(app, db) {
  const auth = new AuthApi(db);
  const users = new Api('user', db);
  const universes = new Api('universe', db);
  const constellations = new Api('constellation', db);
  const galaxies = new Api('galaxy', db);

  app.route('/api/signup')
    .post(bodyParser.json(), auth.signup, users.createRecord);

  app.route('/api/login')
    .post(bodyParser.json(), auth.login);

  app.route('/api/users/:userId')
    .get(users.getRecord)
    .put(bodyParser.json(), users.editRecord);

  app.route('/api/universes/:universeId')
    .get(universes.getRecord)
    .post(bodyParser.json(), universes.createRecord)
    .put(bodyParser.json(), universes.editRecord)
    .delete(universes.deleteRecord);

  app.route('/api/constellations/:constellationId')
    .get(constellations.getRecord)
    .post(bodyParser.json(), constellations.createRecord)
    .put(bodyParser.json(), constellations.editRecord)
    .delete(constellations.deleteRecord);

  app.route('/api/galaxies/:galaxyId')
    .get(galaxies.getRecord)
    .post(bodyParser.json(), galaxies.createRecord)
    .put(bodyParser.json(), galaxies.editRecord)
    .delete(galaxies.deleteRecord);

  app.get('*', (req, res) => {
    res.sendFile(`${process.cwd()}/build/index.html`);
  });
};
