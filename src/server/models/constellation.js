'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Constellation = new Schema({
  name: String,
});

module.exports = mongoose.model('Constellation', Constellation);
