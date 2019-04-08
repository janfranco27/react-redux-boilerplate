import { put, takeLatest } from 'redux-saga/effects'
import actions, { actionTypes } from './actions';


function* loginUser() {
  yield put(actions.loginSuccess({ username: 'user' }));
}

const sessionSagas = [
  takeLatest(actionTypes.LOGIN, loginUser),
]

export default sessionSagas