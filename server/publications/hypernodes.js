import Meteor from 'meteor/meteor';
import HyperNodes from '/lib/schemas/hypernodes';

import smartPublish from "meteor/utilities:smart-publications";


export default function () {
  HyperNodes.smartPublish("hypernodes.list")
};
