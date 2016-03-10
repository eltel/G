import {Mongo} from 'meteor/mongo';
import {Constellations, Nodes, Trees} from '/lib/collections';
import {Meta} from '/lib/schemas/meta';
import {Admin} from '/lib/schemas/admin';

import smartMethods from "meteor/utilities:smart-methods";
import smartPublish from "meteor/utilities:smart-publications";

const isLoggedIn = user => !!user;
const isOwner = (user, document) => user._id === document.createdBy;
const isAdmin = (user, document) => user._id === document.admin;
const isEditor = (user, document) => user._id === document.approvedEditors;

Constellations.attachSchema(new SimpleSchema({
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
  noderef: {
    type: [String],
    maxCount: 40000,
    index: 1,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isEditor,
    join: {
      collection: () => Nodes,
      joinAs: "noderef",
      fields: ["_id", "name"]
    }
  },
  "noderef.$.docref": {
    type: [String],
    maxCount: 10,
    index: 1,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isEditor,
    join: {
      collection: () => Nodes,
      joinAs: "docref",
      fields: ["_id", "name"]
    }
  },
  "noderef.$.category": {
    type: [String],
    maxCount: 10,
    index: 1,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isEditor,
    join: {
      collection: () => Trees,
      joinAs: "category",
      fields: ["category", "category.$.name"]
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
      fields: ["category", "category.$.name"]
    }
  },
  "edge.$.nodepair": {
    type: [String],
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
    insertableIf: isLoggedIn,
    editableIf: isEditor,
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
    insertableIf: isLoggedIn,
    editableIf: isEditor,
    join: {
      collection: () => Trees,
      joinAs: "category",
      fields: ["category", "category.$.name"]
    }
  }
}));



// cmsPageSchema = new SimpleSchema([cmsBaseSchema, {additionalField: {type: String} }]);

// From SearchSource lib files

//   Packages._ensureIndex({packageName: 1, description: 1});

//   SavePackage = function(name, data) {
//   data = _.clone(data);
//   delete data._id;
//   data.stars = (data.repoInfo)? data.repoInfo.stars : 0;
//   Packages.update(name, {$set: data}, {upsert: true});
// };
