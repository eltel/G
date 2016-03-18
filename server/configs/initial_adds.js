import Constellations from '/lib/schemas/constellations';
import Nodes from '/lib/schemas/nodes';
import Galaxies from '/lib/schemas/galaxies';
import Trees from '/lib/schemas/trees';
import Hypernodes from '/lib/schemas/hypernodes';
import Meta from '/lib/schemas/meta';
import Admin from '/lib/schemas/admin';

export default function () {
  if (!Constellations.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
        const name = `This is the constellation: ${lc}`;
      	const bio = `Constellation ${lc}`;
      	const keywords = 'pirates';
      	const locked = false;
      	const fiction = false;
      	const avatar = 'avatar';
      Constellations.insert({name, bio, keywords, locked, fiction, avatar});
    }
  }
}
// // if type is M, change class to document
// // show document icon instead of node
// // later change all icons to reflect class

	
//   nodeType: {
//     type: String,
//     optional: false,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isOwner,
//     // autoform: {
//     //   type: "select-radio-inline",
//     //   options: function () {
//     //     return [
//     //       {label: "Person", value: "P"},
//     //       {label: "Event", value: "E"},
//     //       {label: "Collective", value: "C"},
//     //       {label: "Object", value: "O"},
//     //       {label: "Idea", value: "I"},
//     //       {label: "Media", value: "M"}
//     //     ];
//     //   }
//     // }
//   },

// // create icons for these, clock, speech bubble, glasses
//   realityType: {
//     type: String,
//     optional: false,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isOwner,
//     // autoform: {
//     //   type: "select-radio-inline",
//     //   options: function () {
//     //     return [
//     //       {label: "Perceptive", value: "P"},
//     //       {label: "Linguistic", value: "L"},
//     //       {label: "Temporal", value: "T"} // (Can be more than one, ie L and T, default is P)
//     //     ];
//       // defaultOption="P";
//       // }
//     // }
//   },

// // Reality sequence  relative timeline position for temporal reality only 
// // <---- isn't this just from and to date? What if blank?
// // no, they can drag and drop relative time
// // Language

// // change the label to title for M, 
// // principle for I
// // change max length by type

//   name: {
//     type: String,
//     label: "Name",
//     optional: false,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isOwner,
//     index: 1,
//     max: 50
//   },

// // only for types E, C, O, M, I
//   description: {
//     type: String,
//     label: "Description",
//     optional: false,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isOwner,
//     index: 1,
//     max: 150
//   },

// // only for types E, C
//   geotags: {
//     type: String,
//     label: "Location",
//     optional: false,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isOwner,
//     index: 1,
//     max: 50
//   },

// // only for type O
//   image: {
//     type: String,
//     label: "Image",
//     optional: false,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isOwner,
//     // autoform: {
//     //   afFieldInput: {
//     //     type: "cfs-file",
//     //     collection: "files"
//     //   }
//     // }
//   }
// }));

// export default Nodes;

// // Person node 
//   // Start and end time and date in metadata is DOB and DOD if node class is person

// // Collective node  

// //Edge relationships are going to be dependent on what type of collectives are linked

// // description
// // geotags


// // //Begin Thing node 

// // description
// // image


// // //Begin Event node 

// // description
// // geotags


// // //Begin Media node 
// // //Attach Media classes to each node

// // description
// // keywords
// // sourceurl
// // author
// // Author Name
// // publisher
// // translator
// // interviewee
// // citation
// // created
// // retrieved
// // textsnippet
// // audiosnippet
// // videosnippet

// // //Begin Idea node 
// // //Principles with attached variations, studies, law, schools of thought, problems

// // description
// // Source

// Trees = new Mongo.Collection('trees');
// Trees.attachSchema(new SimpleSchema({
//   Meta: {
//     type: Meta
//   },
//   Admin: {
//     type: Admin
//   },  
//   constellations: {
//     type: [String],
//     maxCount: 50,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Constellations,
//       joinAs: "constellations",
//       fields: ["_id", "name"]
//     }
//   },
//   category: {             
//     type: [String],
//     maxCount: 40000,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor
//   },
//   "category.$.name": {             
//     type: String,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor
//   },
//   "category.$.parent": {             
//     type: String,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor
//   }
// }));

// export default Trees;

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
// 	type: [String],
// 	max: 20,
// 	maxCount: 20,
// 	index: 1,
// 	min: 0,
// 	publish: true,
//     optional: true,
// 	insertableIf: isLoggedIn,
// 	editableIf: isAdmin
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


//   avatar: {   
//     type: String,               // find a file upload type for this
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin
//   },
//   trees: {       // Link the category trees being used
//     type: [String],
//     maxCount: 50,
//     index: 1,
//     publish: true,
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
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin,
//     join: {
//       collection: () => Themes,
//       joinAs: "theme",
//       fields: ["_id", "name"]
//     }
//   },
//   noderef: {
//     type: [String],
//     maxCount: 40000,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Nodes,
//       joinAs: "noderef",
//       fields: ["_id", "name"]
//     }
//   },
//   "noderef.$.docref": {
//     type: [String],
//     maxCount: 10,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Nodes,
//       joinAs: "docref",
//       fields: ["_id", "name"]
//     }
//   },
//   "noderef.$.category": {
//     type: [String],
//     maxCount: 10,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Trees,
//       joinAs: "category",
//       fields: ["_id", "category", "category.$.name"]
//     }
//   },
//   edge: {
//     type: [String],
//     maxCount: 40000,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Trees,
//       joinAs: "category",
//       fields: ["_id", "category", "category.$.name"]
//     }
//   },
//   "edge.$.nodepair": {
//     type: [String],
//     index: 1,
//     publish: true,
//     join: {
//       collection: () => Nodes,
//       joinAs: "nodepair",
//       fields: ["_id"]
//     }
//   },
//   "edge.$.docref": {
//     type: [String],
//     maxCount: 10,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Nodes,
//       joinAs: "docref",
//       fields: ["_id", "name"]
//     }
//   },
//   "edge.$.category": {
//     type: [String],
//     maxCount: 10,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Trees,
//       joinAs: "category",
//       fields: ["_id", "category", "category.$.name"]
//     }
//   }
// }));


// const Galaxies = new Mongo.Collection('galaxies');
// Galaxies.attachSchema(new SimpleSchema({
//   Meta: {
//     type: Meta
//   },
//   Admin: {
//     type: Admin
//   },
//   avatar: {   
//     type: String,               // find a file upload type for this
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin
//   },
//   trees: {       // Link the category trees being used
//     type: [String],
//     maxCount: 50,
//     index: 1,
//     publish: true,
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
//     insertableIf: isLoggedIn,
//     editableIf: isAdmin,
//     join: {
//       collection: () => Themes,
//       joinAs: "theme",
//       fields: ["_id", "name"]
//     }
//   },
//   constellation: {
//     type: [String],
//     maxCount: 40000,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Constellations,
//       joinAs: "constellation",
//       fields: ["_id", "name"]
//     }
//   },
//   "constellation.$.category": {
//     type: [String],
//     maxCount: 10,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Trees,
//       joinAs: "category",
//       fields: ["categoryId", "categoryName"]
//     }
//   },
//   edge: {
//     type: [String],
//     maxCount: 40000,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Trees,
//       joinAs: "category",
//       fields: ["categoryId", "categoryName"]
//     }
//   },
//   "edge.$.nodepair": {
//     type: String,
//     index: 1,
//     publish: true,
//     join: {
//       collection: () => Nodes,
//       joinAs: "nodepair",
//       fields: ["_id"]
//     }
//   },
//   "edge.$.docref": {
//     type: [String],
//     maxCount: 10,
//     index: 1,
//     publish: true,
//     join: {
//       collection: () => Nodes,
//       joinAs: "docref",
//       fields: ["_id", "name"]
//     }
//   },
//   "edge.$.category": {
//     type: [String],
//     maxCount: 10,
//     index: 1,
//     publish: true,
//     join: {
//       collection: () => Trees,
//       joinAs: "category",
//       fields: ["categoryId", "categoryName"]
//     }
//   }
// }));

// const HyperNodes = new Mongo.Collection('hypernodes');
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
//       fields: ["_id", "name"]
//     }
//   }
// }));
// Meta = new SimpleSchema({
//   createdBy: {
//     type: String,
//     publish: true,
//     join: {
//       collection: () => Meteor.users,
//       joinAs: "user",
//       fields: ["_id", "username"]
//     }
//   },
//   createdOn: {
//       type: Date,
//       publish: true
//   }
// });

// const Nodes = new Mongo.Collection('nodes');
// Nodes.attachSchema(new SimpleSchema({
//   Meta: {
//     type: Meta
//   },
//   hypernode: {
//     type: String,
//     index: 1,
//     join: {
//       collection: () => HyperNodes,
//       joinAs: "hypernode",
//       fields: ["_id"]
//     }
//   },
