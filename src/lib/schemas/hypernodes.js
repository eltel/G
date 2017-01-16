// import {Mongo} from 'meteor/mongo';
// import Nodes from './nodes';
// import Meta from './meta';
// import smartMethods from "meteor/utilities:smart-methods";
// import smartPublish from "meteor/utilities:smart-publications";
//
//
// // A hypernode is a grouping of different realities (nodes) of the same thing
// // Collection may not be needed since hypernode is also in nodes and the groupings can be found via search
//
// const HyperNodes = new Mongo.Collection('hypernodes');
//
// HyperNodes.attachSchema(new SimpleSchema({
//   Meta: {
//     type: Meta
//   },
//   reality: {
//     type: String,
//     index: 1,
//     join: {
//       collection: () => Nodes,
//       joinAs: "reality",
//       fields: ["_id", "name", "realityType"]
//     }
//   }
// }));
//
// export default HyperNodes;
