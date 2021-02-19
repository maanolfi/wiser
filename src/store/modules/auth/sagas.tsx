import { put, takeLatest, all } from 'redux-saga/effects';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const res = yield fetch(
      'https://602ed4d04410730017c515bc.mockapi.io/login/users',
    );
    const data = yield res.json();

    const isValid = data.some(
      (user) => user.email === email && user.password === password,
    );
     
    isValid
      ? yield put(signInSuccess({ email, token: '78789456' }))
      : yield put(signInFailure('Suas credenciais não conferem.'))

  } catch (err) {
    yield put(
      signInFailure(
        'Falha ao checar suas credenciais. Tente novamente por favor.',
      ),
    );
  }
}

export default all([
  takeLatest('@auth/AUTH_REQUEST', signIn),  
]);
