import Meteor from 'meteor/meteor';
import check from 'meteor/check';
import Constellations from '/lib/schemas/constellations';
import Meta from '/lib/schemas/meta';

import smartMethods from "meteor/utilities:smart-methods";

const isLoggedIn = user => !!user;
const isOwner = (user, document) => user._id === document.createdBy;

export default function () {
  Constellations.smartMethods({
    createCallback: function (user, document) {
      document = _.extend(document, {
        createdOn: new Date(),
        createdBy: Meteor.userId(),
        editedOn: new Date(),
        editedBy: Meteor.userId(),
        admin: Meteor.userId(),
        approvedEditors: Meteor.userId()
      });
      return document;
    },
    editCallback: function (currentUser, modifier, originalDocument) {
      modifier.$set.editedOn = new Date();
      modifier.$set.editedBy = Meteor.userId();
      return modifier;
    },
    deleteCallback: isOwner
  });
};



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
