import { combineReducers } from 'redux';

// import constellations from './constellations/reducers';
import core from './core/reducers';
// import galaxies from './galaxies/reducers';
// import universe from './universe/reducers';

const appReducer = combineReducers({
  // constellations,
  core,
  // galaxies,
  // universe,
});

const rootReducer = (state, action) => {
  // space for extra steps
  return appReducer(state, action);
};

export default rootReducer;
