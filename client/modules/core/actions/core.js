export default {
  setOrigin({Meteor, LocalState, FlowRouter}, origin) {
    return LocalState.set('ORIGIN', origin);
  },
  setDirection({Meteor, LocalState, FlowRouter}, direction) {
    return LocalState.set('DIRECTION', direction);
  }
};
