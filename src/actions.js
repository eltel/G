import * as core from './core/actions/core-redux';
import * as constellations from './constellations/actions';
import * as galaxies from './galaxies/actions';
import * as universe from './universe/actions';

export default {
    ...core,
    ...constellations,
    ...galaxies,
    ...universe,
};
