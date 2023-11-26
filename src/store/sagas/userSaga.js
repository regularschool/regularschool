import { takeEvery, call, put } from "redux-saga/effects";
import { getUsers } from "../slices/userSlice";
import api from "../../api/instance";

function* workGetUser(action) {
  // const response = yield call(api.get, "")
  yield put(getUsers(action.payload));
  return;
}

export default function* userSaga() {
  yield takeEvery("GET_USER", workGetUser);
}
