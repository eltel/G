export default {
  setOrigin({Meteor, LocalState}, origin) {
    return LocalState.set('ORIGIN', origin);
  },
  setDirection({Meteor, LocalState}, direction) {
    return LocalState.set('DIRECTION', direction);
  }
};
