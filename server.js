const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/server/routes.js');

const app = express();

// TODO
// mongoose.connect('mongodb://databaseaddresshere');
const db = null; // mongoose.connection;

app.use('/static', express.static(`${process.cwd()}/build/static`));

routes(app, db);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Express server listening on port ${process.env.PORT || 3000}`);
});
