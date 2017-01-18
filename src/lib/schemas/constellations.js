// import {Mongo} from 'meteor/mongo';
// import Nodes from './nodes';
// import Trees from './trees';
// import Meta from './meta';
// import Admin from './admin';
// //
// import smartMethods from "meteor/utilities:smart-methods";
// import smartPublish from "meteor/utilities:smart-publications";
//
// const isLoggedIn = user => !!user;
// const isOwner = (user, document) => user._id === document.createdBy;
// const isAdmin = (user, document) => user._id === document.admin;
// const isEditor = (user, document) => user._id === document.approvedEditors;
//
// const Constellations = new Mongo.Collection('constellations');
// Constellations.attachSchema(new SimpleSchema({
//   meta: {
//     type: Meta
//   },
//   admin: {
//     type: Admin
//   },
//   avatar: {
//     type: String,               // find a file upload type for this
//     publish: true,
//     optional: true,
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin
//   },
//   trees: {                      // Link the category trees being used
//     type: [String],
//     maxCount: 50,
//     index: 1,
//     publish: true,
//     optional: true,
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin,
//     join: {
//       collection: () => Trees,
//       joinAs: "categories",
//       fields: ["_id", "name"]
//     }
//   },
//   trustedBy: {
//     type: [String],
//     maxCount: 40000,
//     index: 1,
//     publish: true,
//     optional: true,
//     join: {
//       collection: () => Meteor.users,
//       joinAs: "user",
//       fields: ["_id", "username"]
//     }
//   },
//   theme: {
//     type: String,
//     index: 1,
//     publish: true,
//     optional: true,
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin,
//     join: {
//       collection: () => Themes,
//       joinAs: "theme",
//       fields: ["_id", "name"]
//     }
//   },
//   noderef: {                // link all the nodes in this constellation
//     type: [String],
//     maxCount: 40000,
//     index: 1,
//     publish: true,
//     optional: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Nodes,
//       joinAs: "noderef",
//       fields: ["_id", "name"]
//     }
//   },
//   "noderef.$.docref": {           // link all the documents for this node
//     type: [String],
//     maxCount: 10,
//     index: 1,
//     publish: true,
//     optional: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Nodes,
//       joinAs: "docref",
//       fields: ["_id", "name"]
//     }
//   },
//   "noderef.$.category": {         // link the categories for this node
//     type: [String],
//     maxCount: 10,
//     index: 1,
//     publish: true,
//     optional: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Trees,
//       joinAs: "category",
//       fields: ["_id", "category", "category.$.name"]
//     }
//   },
//   edge: {               // all the edges for this constellation
//     type: [String],
//     maxCount: 40000,
//     index: 1,
//     publish: true,
//     optional: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor
//   },
//   "edge.$.nodepair": {          // the nodepair for this edge
//     type: [String],             // what is the most efficient way to associate nodes and edges?
//     index: 1,
//     publish: true,
//     optional: true
//   },
//   "edge.$.docref": {        // link all the documents for this edge
//     type: [String],
//     maxCount: 10,
//     index: 1,
//     publish: true,
//     optional: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Nodes,
//       joinAs: "docref",
//       fields: ["_id", "name"]
//     }
//   },
//   "edge.$.category": {      // link the categories for this edge
//     type: [String],
//     maxCount: 10,
//     index: 1,
//     publish: true,
//     optional: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Trees,
//       joinAs: "category",
//       fields: ["_id", "category", "category.$.name"] // the Trees _id plus which category in the tree
//     }
//   }
// }));
// //
// export default Constellations;
// //
// // //
// // // // cmsPageSchema = new SimpleSchema([cmsBaseSchema, {additionalField: {type: String} }]);
// // //
// // // // From SearchSource lib files
// // //
// // // //   Packages._ensureIndex({packageName: 1, description: 1});
// // //
// // // //   SavePackage = function(name, data) {
// // // //   data = _.clone(data);
// // // //   delete data._id;
// // // //   data.stars = (data.repoInfo)? data.repoInfo.stars : 0;
// // // //   Packages.update(name, {$set: data}, {upsert: true});
// // // // };
