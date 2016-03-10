import {Mongo} from 'meteor/mongo';
import {HyperNodes, Nodes} from '/lib/collections';
import {Meta} from '/lib/schemas/meta';
import smartMethods from "meteor/utilities:smart-methods";
import smartPublish from "meteor/utilities:smart-publications";

// Only editable/deletable if isOwner and no constellation is using
const isLoggedIn = user => !!user;
const isOwner = (user, document) => user._id === document.createdBy;

Nodes.attachSchema(new SimpleSchema({
  Meta: {
    type: Meta
  },
  hypernode: {
    type: String,
    index: 1,
    join: {
      collection: () => HyperNodes,
      joinAs: "hypernode",
      fields: ["_id"]
    }
  },

// if type is M, change class to document
// show document icon instead of node
// later change all icons to reflect class

	
  nodeType: {
    type: String,
    optional: false,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isOwner,
    // autoform: {
    //   type: "select-radio-inline",
    //   options: function () {
    //     return [
    //       {label: "Person", value: "P"},
    //       {label: "Event", value: "E"},
    //       {label: "Collective", value: "C"},
    //       {label: "Object", value: "O"},
    //       {label: "Idea", value: "I"},
    //       {label: "Media", value: "M"}
    //     ];
    //   }
    // }
  },

// create icons for these, clock, speech bubble, glasses
  realityType: {
    type: String,
    optional: false,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isOwner,
    // autoform: {
    //   type: "select-radio-inline",
    //   options: function () {
    //     return [
    //       {label: "Perceptive", value: "P"},
    //       {label: "Linguistic", value: "L"},
    //       {label: "Temporal", value: "T"} // (Can be more than one, ie L and T, default is P)
    //     ];
      // defaultOption="P";
      // }
    // }
  },

// Reality sequence  relative timeline position for temporal reality only 
// <---- isn't this just from and to date? What if blank?
// no, they can drag and drop relative time
// Language

// change the label to title for M, 
// principle for I
// change max length by type

  name: {
    type: String,
    label: "Name",
    optional: false,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isOwner,
    index: 1,
    max: 50
  },

// only for types E, C, O, M, I
  description: {
    type: String,
    label: "Description",
    optional: false,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isOwner,
    index: 1,
    max: 150
  },

// only for types E, C
  geotags: {
    type: String,
    label: "Location",
    optional: false,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isOwner,
    index: 1,
    max: 50
  },

// only for type O
  image: {
    type: String,
    label: "Image",
    optional: false,
    publish: true,
    insertableIf: isLoggedIn,
    editableIf: isOwner,
    // autoform: {
    //   afFieldInput: {
    //     type: "cfs-file",
    //     collection: "files"
    //   }
    // }
  }
}));

// Person node 
  // Start and end time and date in metadata is DOB and DOD if node class is person

// Collective node  

//Edge relationships are going to be dependent on what type of collectives are linked

// description
// geotags


// //Begin Thing node 

// description
// image


// //Begin Event node 

// description
// geotags


// //Begin Media node 
// //Attach Media classes to each node

// description
// keywords
// sourceurl
// author
// Author Name
// publisher
// translator
// interviewee
// citation
// created
// retrieved
// textsnippet
// audiosnippet
// videosnippet

// //Begin Idea node 
// //Principles with attached variations, studies, law, schools of thought, problems

// description
// Source