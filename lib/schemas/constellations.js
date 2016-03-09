// import {Mongo} from 'meteor/mongo';
// import {Constellations, Nodes, Kinds, MetaSchema} from '/lib/collections';

// import smartMethods from "meteor/utilities:smart-methods";
// import smartPublish from "meteor/utilities:smart-publications";

// const isLoggedIn = user => !!user;
// const isOwner = (user, document) => user._id === document.createdBy;
// // const isAdmin = (user, document) => user._id === document.admin;
// // const isEditor = (user, document) => user._id === document.approvedEditors;

// AdminSchema = new SimpleSchema({
//   name: {
//     type: String,
//     index: 1,
//     max: 50,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin
//   },
//   bio: {
//     type: String,
//     max: 200,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin
//   },
//   avatar: {   
//     type: String,               // find a file upload type for this
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin
//   },
//   keywords: {
//       type: [String],
//       maxCount: 20,
//       index: 1,
//       min: 0,
//       publish: true,
//       insertableIf: isLoggedIn,
//       editableIf: isAdmin
//   },
//   locked: {
//     type: Boolean,
//     label: "Editing locked",
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isOwner
//   },
//   fiction: {
//     type: Boolean,
//     label: "Fiction",
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin
//   }
//   // categories: {
//   //   type: [Object],
//   //   index: 50,
//   //   publish: true,
//   //   insertableIf: isLoggedIn,
//   //   editableIf: isAdmin,
//   //   join: {
//   //     collection: () => Kinds,
//   //     joinAs: "categories",
//   //     fields: ["_id", "name"]
//   //   }
//   // },
//   // approvedEditors: {
//   //   type: [Object],
//   //   maxCount: 500,
//   //   index: 1,
//   //   optional: true,
//   //   publish: true,
//   //   insertableIf: isLoggedIn,
//   //   editableIf: isAdmin,
//   //   join: {
//   //     collection: () => Meteor.users,
//   //     joinAs: "user",
//   //     fields: ["_id", "username"]
//   //   }
//   // },
//   // editedBy: {
//   //   type: [Object],
//   //   maxCount: 40000,
//   //   index: 1,
//   //   publish: true,
//   //   join: {
//   //     collection: () => Meteor.users,
//   //     joinAs: "user",
//   //     fields: ["_id", "username"]
//   //   }
//   // },
//   // editedOn: {
//   //   type: [Date],
//   //   maxCount: 40000,
//   //   publish: true,
//   // },
//   // trustedBy: {
//   //   type: [Object],
//   //   maxCount: 40000,
//   //   index: 1,
//   //   publish: true,
//   //   join: {
//   //     collection: () => Meteor.users,
//   //     joinAs: "user",
//   //     fields: ["_id", "username"]
//   //   }
//   // }
//   // theme: {
//   //   type: String,
//   //   index: 1,
//   //   publish: true,
//   //   join: {
//   //     collection: () => Themes,
//   //     joinAs: "theme",
//   //     fields: ["_id", "name"]
//   //   }
//   // },
//   // language: {
//   // },
// });

// Constellations.attachSchema(new SimpleSchema({
//   Meta: {
//     type: MetaSchema
//   },
//   Admin: {
//     type: AdminSchema
//   }
//   // noderef: {
//   //   type: [Object],
//   //   maxCount: 40000,
//   //   index: 1,
//   //   publish: true,
//   //   join: {
//   //     collection: () => Nodes,
//   //     joinAs: "noderef",
//   //     fields: ["_id", "name"]
//   //   }
//   // },
//   // "noderef.$.docref": {
//   //   type: [Object],
//   //   maxCount: 10,
//   //   index: 1,
//   //   publish: true,
//   //   join: {
//   //     collection: () => Nodes,
//   //     joinAs: "docref",
//   //     fields: ["_id", "name"]
//   //   }
//   // },
//   // "noderef.$.kindref": {
//   //   type: [Object],
//   //   maxCount: 10,
//   //   index: 1,
//   //   publish: true,
//   //   join: {
//   //     collection: () => Kinds,
//   //     joinAs: "kindref",
//   //     fields: ["_id", "name"]
//   //   }
//   // },
//   // edge: {
//   //   type: [Object],
//   //   index: 1,
//   //   publish: true,
//   //   join: {
//   //     collection: () => Kinds,
//   //     joinAs: "edgeref",
//   //     fields: ["_id", "name"]
//   //   }
//   // },
//   // "edge.$.node1": {
//   //   type: Object,
//   //   index: 1,
//   //   publish: true,
//   //   join: {
//   //     collection: () => Nodes,
//   //     joinAs: "node1",
//   //     fields: ["_id", "name"]
//   //   }
//   // },
//   // "edge.$.node2": {
//   //   type: Object,
//   //   index: 1,
//   //   publish: true,
//   //   join: {
//   //     collection: () => Nodes,
//   //     joinAs: "node2",
//   //     fields: ["_id", "name"]
//   //   }
//   // },
//   // "edge.$.docref": {
//   //   type: [Object],
//   //   maxCount: 10,
//   //   index: 1,
//   //   publish: true,
//   //   join: {
//   //     collection: () => Nodes,
//   //     joinAs: "docref",
//   //     fields: ["_id", "name"]
//   //   }
//   // },
//   // "edge.$.classref": {
//   //   type: [Object],
//   //   maxCount: 10,
//   //   index: 1,
//   //   publish: true,
//   //   join: {
//   //     collection: () => Kinds,
//   //     joinAs: "kindref",
//   //     fields: ["_id", "name"]
//   //   }
//   // }
// }));



// // cmsPageSchema = new SimpleSchema([cmsBaseSchema, {additionalField: {type: String} }]);

// // From SearchSource lib files

// //   Packages._ensureIndex({packageName: 1, description: 1});


// //   SavePackage = function(name, data) {
// //   data = _.clone(data);
// //   delete data._id;
// //   data.stars = (data.repoInfo)? data.repoInfo.stars : 0;
// //   Packages.update(name, {$set: data}, {upsert: true});
// // };
