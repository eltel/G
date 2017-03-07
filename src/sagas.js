import { takeLatest, delay } from 'redux-saga';
import { call, select, put } from 'redux-saga/effects';
import _ from 'lodash';

import * as actions from './actions';
import postQuery from './api';

const apiMap = [
  'fetchUsers',
  'userLogin',
  'createUser',
  'editUser',
  'addTrust',
  'revokeTrust',
  'addWatch',
  'revokeWatch',
  'addSupport',
  'revokeSupport',
  'fetchUserConstellations',
  'createConstellation',
  'createGalaxy',
  'createNode',
  'editNode',
  'deleteNode',
  'attachRealities',
  'fetchHypernode',
];

function* fetchEntitySaga(entity, action) {
  const { response } = yield call(postQuery, action);
  if (!response.error) {
    yield put(entity.success(response));
  } else {
    yield put(entity.failure(response.error));
  }
}

function fetchEntity(entity) {
  return fetchEntitySaga.bind(null, entity);
}

export function* takeLatestRequest(entity) {
  yield takeLatest(entity.types.REQUEST, fetchEntity(entity));
}

export default function* fetchers() {
  yield _.map(apiMap, fetcher => takeLatestRequest(actions[fetcher]));
}
