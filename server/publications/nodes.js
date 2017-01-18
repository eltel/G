import Meteor from 'meteor/meteor';
import Nodes from '/lib/schemas/nodes';

import smartPublish from "meteor/utilities:smart-publications";


export default function () {
  Nodes.smartPublish("nodes.list")
};
