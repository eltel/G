import Constellation from '../components/constellations.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';




export const composer = ({context, selectId}, onData) => {
  const {Meteor, Collections} = context();
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Constellation);
