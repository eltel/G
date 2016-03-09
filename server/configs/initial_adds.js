import {Constellations} from '/lib/collections';

export default function () {
  if (!Constellations.findOne()) {
    for (let lc = 1; lc <= 5; lc++) {
      const name = `This is the post title: ${lc}`;
      const bio = `Post ${lc}'s content is great!`;
      Constellations.insert({name, bio});
    }
  }
}
