import {Galaxies} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('galaxies.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, title: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Galaxies.find(selector, options);
  });

  Meteor.publish('galaxies.single', function (selectId) {
    check(selectId, String);
    const selector = {_id: selectId};
    return Galaxies.find(selector);
  });
}
