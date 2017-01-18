// import {Mongo} from 'meteor/mongo';
// import smartMethods from "meteor/utilities:smart-methods";
// import smartPublish from "meteor/utilities:smart-publications";
//
// const isLoggedIn = user => !!user;
// const isOwner = (user, document) => user._id === document.createdBy;
// const isAdmin = (user, document) => user._id === document.admin;
//
// Admin = new SimpleSchema({
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
//     optional: true,
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin
//   },
//   keywords: {
//       type: [String],
//       maxCount: 20,
//       max: 20,
//       index: 1,
//       min: 0,
//       publish: true,
//       optional: true,
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
//   },
//   admin: {
//     type: [String],
//     maxCount: 500,
//     index: 1,
//     optional: true,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isOwner,
//     join: {
//       collection: () => Meteor.users,
//       joinAs: "admin",
//       fields: ["_id", "username"]
//     }
//   },
//   approvedEditors: {
//     type: [String],
//     maxCount: 500,
//     index: 1,
//     optional: true,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin,
//     join: {
//       collection: () => Meteor.users,
//       joinAs: "editor",
//       fields: ["_id", "username"]
//     }
//   },
//   editedBy: {
//     type: [String],
//     maxCount: 40000,
//     index: 1,
//     publish: true,
//     join: {
//       collection: () => Meteor.users,
//       joinAs: "editor",
//       fields: ["_id", "username"]
//     }
//   },
//   editedOn: {
//     type: [Date],
//     maxCount: 40000,
//     publish: true,
//   }
// });
//
// export default Admin;
