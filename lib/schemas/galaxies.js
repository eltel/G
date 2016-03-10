import {Mongo} from 'meteor/mongo';
import {Galaxies, Constellations} from '/lib/collections';
import {Meta} from '/lib/schemas/meta';
import {Admin} from '/lib/schemas/admin';
import smartMethods from "meteor/utilities:smart-methods";
import smartPublish from "meteor/utilities:smart-publications";

const isLoggedIn = user => !!user;
const isAdmin = (user, document) => user._id === document.admin;
const isEditor = (user, document) => user._id === document.approvedEditors;

Galaxies.attachSchema(new SimpleSchema({
  Meta: {
    type: Meta
  },
  Admin: {
    type: Admin
  },
  avatar: {   
    type: String,               // find a file upload type for this
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isAdmin
  },
  trees: {       // Link the category trees being used
    type: [String],
    maxCount: 50,
    index: 1,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isAdmin,
    join: {
      collection: () => Trees,
      joinAs: "categories",
      fields: ["_id", "name"]
    }
  },
  trustedBy: {
    type: [String],
    maxCount: 40000,
    index: 1,
    publish: true,
    join: {
      collection: () => Meteor.users,
      joinAs: "user",
      fields: ["_id", "username"]
    }
  },
  theme: {
    type: String,
    index: 1,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isAdmin,
    join: {
      collection: () => Themes,
      joinAs: "theme",
      fields: ["_id", "name"]
    }
  },
  constellation: {
    type: [String],
    maxCount: 40000,
    index: 1,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isEditor,
    join: {
      collection: () => Constellations,
      joinAs: "constellation",
      fields: ["_id", "name"]
    }
  },
  "constellation.$.category": {
    type: [String],
    maxCount: 10,
    index: 1,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isEditor,
    join: {
      collection: () => Trees,
      joinAs: "category",
      fields: ["categoryId", "categoryName"]
    }
  },
  edge: {
    type: [String],
    maxCount: 40000,
    index: 1,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isEditor,
    join: {
      collection: () => Trees,
      joinAs: "category",
      fields: ["categoryId", "categoryName"]
    }
  },
  "edge.$.nodepair": {
    type: String,
    index: 1,
    publish: true,
    join: {
      collection: () => Nodes,
      joinAs: "nodepair",
      fields: ["_id"]
    }
  },
  "edge.$.docref": {
    type: [String],
    maxCount: 10,
    index: 1,
    publish: true,
    join: {
      collection: () => Nodes,
      joinAs: "docref",
      fields: ["_id", "name"]
    }
  },
  "edge.$.category": {
    type: [String],
    maxCount: 10,
    index: 1,
    publish: true,
    join: {
      collection: () => Trees,
      joinAs: "category",
      fields: ["categoryId", "categoryName"]
    }
  }
}));