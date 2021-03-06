import {all, takeLatest, call, put, select} from 'redux-saga/effects'; //put substitui o dispatch
import api from '~/services/api';
import navigation from '~/services/navigation';

import * as LoginActions from '~/store/actions/login';
import * as RepositoriesActions from '~/store/actions/repositories';

function* login(action) {
  try {
    const {username} = action.payload;

    yield call(api.get, `/users/${username}`);
    yield put(LoginActions.loginSuccess(username));

    navigation.navigate('Repositories');
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}

function* loadRepositories() {
  try {
    const {username} = yield select(state => state.login);

    const response = yield call(api.get, `/users/${username}/repos`);
    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));
  } catch (err) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest('LOGIN_REQUEST', login),
    takeLatest('LOAD_REPOSITORIES_REQUEST', loadRepositories),
  ]);
}
