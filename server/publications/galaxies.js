import Meteor from 'meteor/meteor';
import Galaxies from '/lib/schemas/galaxies';

import smartPublish from "meteor/utilities:smart-publications";


export default function () {
  Galaxies.smartPublish("galaxies.list")
};