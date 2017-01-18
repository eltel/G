import {check} from 'meteor/check';

export default function ({Meteor, Collections}) {
  Meteor.methods({
    'constellations.create'(_id, title, content) {
      check(_id, String);
      check(title, String);
      check(content, String);

      const createdAt = new Date();
      const post = {
        _id, title, content, createdAt,
        saving: true
      };

      Collections.Constellations.insert(constellation);
    }
  });
}
