import { createRequestTypes, actionCreators, action } from '../../actions';

export const FETCH_USERS = createRequestTypes('FETCH_USERS');
export const fetchUsers = actionCreators(FETCH_USERS);

export const USER_LOGIN = createRequestTypes('USER_LOGIN');
export const userLogin = actionCreators(USER_LOGIN);

export const USER_LOGOUT = createRequestTypes('USER_LOGOUT');
export const userLogout = actionCreators(USER_LOGOUT);

export const CREATE_USER = createRequestTypes('CREATE_USER');
export const createUser = actionCreators(CREATE_USER);

export const EDIT_USER = createRequestTypes('EDIT_USER');
export const editUser = actionCreators(EDIT_USER);

export const DELETE_USER = createRequestTypes('DELETE_USER');
export const deleteUser = actionCreators(DELETE_USER);

export const ADD_TRUST = createRequestTypes('ADD_TRUST');
export const addTrust = actionCreators(ADD_TRUST);

export const REVOKE_TRUST = createRequestTypes('REVOKE_TRUST');
export const revokeTrust = actionCreators(REVOKE_TRUST);

export const ADD_WATCH = createRequestTypes('ADD_WATCH');
export const addWatch = actionCreators(ADD_WATCH);

export const REVOKE_WATCH = createRequestTypes('REVOKE_WATCH');
export const revokeWatch = actionCreators(REVOKE_WATCH);

export const ADD_SUPPORT = createRequestTypes('ADD_SUPPORT');
export const addSupport = actionCreators(ADD_SUPPORT);

export const REVOKE_SUPPORT = createRequestTypes('REVOKE_SUPPORT');
export const revokeSupport = actionCreators(REVOKE_SUPPORT);

export const SET_TRUST_DEGREES = createRequestTypes('SET_TRUST_DEGREES');
export const setTrustDegrees = actionCreators(SET_TRUST_DEGREES);