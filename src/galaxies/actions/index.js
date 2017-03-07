import { createRequestTypes, actionCreators, action } from '../../actions';

export const CREATE_GALAXY = createRequestTypes('CREATE_GALAXY');
export const createGalaxy = actionCreators(CREATE_GALAXY);
