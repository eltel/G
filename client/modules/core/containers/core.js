import Core from '../components/core.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  let direction = LocalState.get('DIRECTION');
  if (!direction) {
      direction = 'universe';
	}
  let origin = LocalState.get('ORIGIN');
  if (!origin) {
      origin = 'search';
	}
  onData(null, {origin, direction});
};

export const depsMapper = (context, actions) => ({
  setOrigin: actions.core.setOrigin,
  setDirection: actions.core.setDirection,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Core);


// From SearchSource example

// const options = {
//   keepHistory: 1000 * 60 * 5,
//   localSearch: true
// };
// const fields = ['postName', 'description'];

// PostSearch = new SearchSource('posts', fields, options);

// Template.searchResult.helpers({
//   getPackages: function() {
//     return PostSearch.getData({
//       transform: function(matchText, regExp) {
//         return matchText.replace(regExp, "<b>$&</b>")
//       },
//       sort: {isoScore: -1}
//     });
//   },
  
//   isLoading: function() {
//     return PostSearch.getStatus().loading;
//   }
// });

// Template.searchResult.rendered = function() {
//   PackageSearch.search('');
// };

// Template.searchBox.events({
//   "keyup #search-box": _.throttle(function(e) {
//     var text = $(e.target).val().trim();
//     PackageSearch.search(text);
//   }, 200)
// });
