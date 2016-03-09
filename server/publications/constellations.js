import {Constellations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import smartPublish from "meteor/utilities:smart-publications";


export default function () {
  Constellations.smartPublish("constellations.list")
};



// export default function () {
//   Meteor.publish('constellations.list', function () {
//     const selector = {};
//     const options = {
//       fields: {_id: 1, title: 1},
//       sort: {createdAt: -1},
//       limit: 10
//     };

//     return Constellations.find(selector, options);
//   });

//   Meteor.publish('constellations.single', function (selectId) {
//     check(selectId, String);
//     const selector = {_id: selectId};
//     return Constellations.find(selector);
//   });

// }
