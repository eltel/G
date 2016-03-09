import {Mongo} from 'meteor/mongo';

export const Nodes = new Mongo.Collection('nodes');
export const Constellations = new Mongo.Collection('constellations');
export const Galaxies = new Mongo.Collection('galaxies');
export const Kinds = new Mongo.Collection('kinds');

MetaSchema = new SimpleSchema({
  createdBy: {
    type: String,
    publish: true,
    join: {
      collection: () => Meteor.users,
      joinAs: "user",
      fields: ["_id", "username"]
    }
  },
  createdOn: {
      type: Date,
      publish: true
  }
});
