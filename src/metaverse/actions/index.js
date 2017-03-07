import { createRequestTypes, actionCreators, action } from '../../actions';

export const CREATE_METAVERSE = createRequestTypes('CREATE_METAVERSE');
export const createMetaverse = actionCreators(CREATE_METAVERSE);

export const EDIT_METAVERSE = createRequestTypes('EDIT_METAVERSE');
export const editMetaverse = actionCreators(EDIT_METAVERSE);

export const DELETE_METAVERSE = createRequestTypes('DELETE_METAVERSE');
export const deleteMetaverse = actionCreators(DELETE_METAVERSE);

export const ATTACH_METAVERSE = createRequestTypes('ATTACH_METAVERSE');
export const attachMetaverse = actionCreators(ATTACH_METAVERSE);
