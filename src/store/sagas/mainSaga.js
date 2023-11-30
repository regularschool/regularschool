import { takeEvery, call, put } from "redux-saga/effects";
import { getLang } from "../slices/mainSlice";
import api from "../../api/instance";

function* workGetLang(action) {
  // const response = yield call(api.get, "")
  yield put(getLang(action.payload));
  return;
}

export default function* userSaga() {
  yield takeEvery("GET_LANG", workGetLang);
}
