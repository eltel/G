import nodes from './schemas/nodes';
import constellations from './schemas/constellations';
import galaxies from './schemas/galaxies';
import trees from './schemas/trees';
import hypernodes from './schemas/hypernodes';

export default function () {
  nodes();
  hypernodes();
  constellations();
  galaxies();
  trees();
}