import {Constellations} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import smartMethods from "meteor/utilities:smart-methods";

const isLoggedIn = user => !!user;
const isOwner = (user, document) => user._id === document.createdBy;

export default function () {
  Constellations.smartMethods({
    createCallback: function (user, document) {
      document = _.extend(document, {
        createdOn: new Date(),
        createdBy: Meteor.userId()
      });
      return document;
    },
    deleteCallback: isOwner
  });
};

// Tasks.smartMethods({
//   createCallback: function (currentUser, document) {
//     document = _.extend(document, {
//       createdAt: new Date(),
//       owner: currentUser._id,
//       username: currentUser.username
//     });
//     return document;
//   },
//   editCallback: function (currentUser, modifier, originalDocument) {
//     modifier.$set.editedAt = new Date();
//     return modifier;
//   },
//   deleteCallback: function (currentUser, document) {
//     return currentUser._id === document.userId;
//   }
// });

//   SearchSource.defineSource('constellations', function(searchText, options) {
//   var options = {sort: {isoScore: -1}, limit: 20};
  
//   if(searchText) {
//     var regExp = buildRegExp(searchText);
//     var selector = {$or: [
//       // {packageName: regExp},
//       {postTitle: regExp}
//     ]};

//     return Constellations.find(selector, options).fetch();
//   } else {
//     return Constellations.find({}, options).fetch();
//   }
// });

// function buildRegExp(searchText) {
//   // this is a dumb implementation
//   var parts = searchText.trim().split(/[ \-\:]+/);
//   return new RegExp("(" + parts.join('|') + ")", "ig");
// }
// }
