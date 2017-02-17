'use strict';
const _ = require('lodash');

const User = require('../schemas/users');
const Universe = require('../schemas/universe');
const Constellation = require('../schemas/constellations');
const Galaxy = require('../schemas/galaxies');

const recordTypes = {
  user: {
    name: 'user',
    model: User,
  },
  universe: {
    name: 'universe',
    model: User,
  },
  constellation: {
    name: 'constellation',
    model: User,
  },
  galaxy: {
    name: 'galaxy',
    model: User,
  },
};

module.exports = function Apis(type, db) {
  this.getRecord = (req, res) => {
    console.log(`Received request for ${recordTypes[type].name} ${req.params.id}`);
    recordTypes[type].model.findById(req.params.id, (error, item) => {
      if (error) {
        res.status(404).json({ error });
      } else {
        res.status(200).json(item);
      }
    });
  };

  this.createRecord = (req, res) => {
    const newItem = new recordTypes[type].model({});
    _.forEach(req.body, (value, key) => {
      newItem[key] = value;
    });
    newItem.save((error, savedItem) => {
      if (error) {
        res.status(500).json({ error });
      } else {
        res.status(200).json(savedItem);
      }
    });
  };

  this.editRecord = (req, res) => {
    recordTypes[type].findById(req.body.id, (lookupError, item) => {
      if (lookupError) {
        res.status(404).json({ error: lookupError });
      } else {
        _.forEach(req.body, (value, key) => {
          item[key] = value;
        });
        item.save((error, updatedItem) => {
          if (error) {
            res.status(500).json({ error });
          } else {
            res.status(200).json(updatedItem);
          }
        });
      }
    });
  };

  this.deleteRecord = (req, res) => {
    recordTypes[type].findByIdAndRemove(req.params.id, (error) => {
      if (error) {
        res.status(404).json({ error });
      } else {
        res.status(200).end('deleted');
      }
    });
  };
};
