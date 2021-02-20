import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from '../modules/auth/types'
import { signIn } from '../modules/auth/sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(RepositoriesTypes.REQUEST, signIn)
  ]);
}