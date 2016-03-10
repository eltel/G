import {Mongo} from 'meteor/mongo';
import {HyperNodes, Nodes} from '/lib/collections';
import {Meta} from '/lib/schemas/meta';
import smartMethods from "meteor/utilities:smart-methods";
import smartPublish from "meteor/utilities:smart-publications";

HyperNodes.attachSchema(new SimpleSchema({
  Meta: {
    type: Meta
  },
  reality: {
    type: String,
    index: 1,
    join: {
      collection: () => Nodes,
      joinAs: "reality",
      fields: ["_id", "name"]
    }
  }
}));
