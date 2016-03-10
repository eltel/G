import {Trees} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'trees.create'(_id, title, content) {
      check(_id, String);
      check(title, String);
      check(content, String);

      // Show the latency compensations
      Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const Tree = {_id, title, content, createdAt};
      Trees.insert(tree);
    }
  });

  SearchSource.defineSource('trees', function(searchText, options) {
  var options = {sort: {isoScore: -1}, limit: 20};
  
  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      // {packageName: regExp},
      {postTitle: regExp}
    ]};

    return Trees.find(selector, options).fetch();
  } else {
    return Trees.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
}
