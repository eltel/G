'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  id: String,
  email: String,
  displayName: String,
  role: String,
});

module.exports = mongoose.model('User', User);
