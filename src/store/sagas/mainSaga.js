import { takeEvery, call, put } from "redux-saga/effects";
import { getAccount } from "../slices/mainSlice";
import api from "../../api/instance";

function* workGetAccount(action) {
  // const response = yield call(api.get, "")
  yield put(getAccount(action.payload));
  return;
}

export default function* userSaga() {
  yield takeEvery("GET_ACCOUNT", workGetAccount);
}
