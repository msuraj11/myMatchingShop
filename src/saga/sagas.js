import { put, takeLatest, call, all } from "redux-saga/effects";
import data from "../jsonFiles/data.json";
import * as actionTypes from "../constants/actionTypes";

function* productData(action) {
  yield put({ type: actionTypes.JSON_DATA_RECEIVED, payload: data });
}

function* productwather() {
  yield takeLatest(actionTypes.JSON_DATA, productData);
}

export default function* rootSaga() {
  yield all([call(productwather)]);
}
