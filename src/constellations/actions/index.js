import { createRequestTypes, actionCreators } from '../../actions';

export const FETCH_USER_CONSTELLATIONS = createRequestTypes('FETCH_USER_CONSTELLATIONS');
export const fetchUserConstellations = actionCreators(FETCH_USER_CONSTELLATIONS);

export const CREATE_CONSTELLATION = createRequestTypes('CREATE_CONSTELLATION');
export const createConstellation = actionCreators(CREATE_CONSTELLATION);
