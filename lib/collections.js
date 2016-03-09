import {Mongo} from 'meteor/mongo';

export const Nodes = new Mongo.Collection('nodes');
export const Constellations = new Mongo.Collection('constellations');
export const Galaxies = new Mongo.Collection('galaxies');
export const Kinds = new Mongo.Collection('kinds');
