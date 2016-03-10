import {HyperNodes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'hypernodes.create'(_id, title, content) {
      check(_id, String);
      check(title, String);
      check(content, String);

      // Show the latency compensations
      Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const hypernode = {_id, title, content, createdAt};
      HyperNodes.insert(hypernode);
    }
  });

  SearchSource.defineSource('nodes', function(searchText, options) {
  var options = {sort: {isoScore: -1}, limit: 20};
  
  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      // {packageName: regExp},
      {postTitle: regExp}
    ]};

    return Nodes.find(selector, options).fetch();
  } else {
    return Nodes.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
}
