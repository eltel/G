import Meteor from 'meteor/meteor';
import Trees from '/lib/schemas/trees';

import smartPublish from "meteor/utilities:smart-publications";

export default function () {
  Trees.smartPublish("trees.list")
};
