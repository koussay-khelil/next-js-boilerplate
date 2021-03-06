import { take, call, put, select, takeEvery, all } from 'redux-saga/effects';
import constants from './constants';
// import * as api from 'shared/services/form.service'
import { generateSaga, sagaTypes } from '../../utils/generic-saga';
// Individual exports for testing

export function* defaultSagaWatcher() {
  yield takeEvery(
    constants.defaultAction.request,
    generateSaga(sagaTypes.GET, constants.defaultAction /* api.defaultApi */)
  );
}

export default function* storeSaga() {
  yield all([defaultSagaWatcher()]);
}
