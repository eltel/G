import { createRequestTypes, actionCreators, action } from '../../actions';

export const CREATE_NODE = createRequestTypes('CREATE_NODE');
export const createNode = actionCreators(CREATE_NODE);

export const EDIT_NODE = createRequestTypes('EDIT_NODE');
export const editNode = actionCreators(EDIT_NODE);

export const DELETE_NODE = createRequestTypes('DELETE_NODE');
export const deleteNode = actionCreators(DELETE_NODE);

export const ATTACH_REALITIES = createRequestTypes('ATTACH_REALITIES');
export const attachRealities = actionCreators(ATTACH_REALITIES);

export const FETCH_HYPERNODE = createRequestTypes('FETCH_HYPERNODE');
export const fetchHypernode = actionCreators(FETCH_HYPERNODE);
