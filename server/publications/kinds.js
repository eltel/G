import {Kinds} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('kinds.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, title: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Kinds.find(selector, options);
  });

  Meteor.publish('kinds.single', function (selectId) {
    check(selectId, String);
    const selector = {_id: selectId};
    return Kinds.find(selector);
  });

}
