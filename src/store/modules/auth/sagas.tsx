import { put } from 'redux-saga/effects';
import { signInSuccess, signInFailure } from './actions';

interface Action {
  type: string,
  payload: {
    email: string,
    password: string
  }
}

export function* signIn(action: Action) {
  const { email, password } = action.payload;

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

