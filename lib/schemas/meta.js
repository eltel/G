import {Mongo} from 'meteor/mongo';
import smartMethods from "meteor/utilities:smart-methods";
import smartPublish from "meteor/utilities:smart-publications";

Meta = new SimpleSchema({
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
