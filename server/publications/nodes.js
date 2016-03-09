import {Nodes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('nodes.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, title: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Nodes.find(selector, options);
  });

  Meteor.publish('nodes.single', function (selectId) {
    check(selectId, String);
    const selector = {_id: selectId};
    return Nodes.find(selector);
  });
}
