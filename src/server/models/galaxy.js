'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Galaxy = new Schema({
  name: String,
});

module.exports = mongoose.model('Galaxy', Galaxy);
