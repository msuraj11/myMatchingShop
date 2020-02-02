import { put, takeLatest, call, all } from "redux-saga/effects";
import axios from "axios";
//import data from "../jsonFiles/data.json";
import * as actionTypes from "../constants/actionTypes";

function* productData(action) {
  if (action.url !== "") {
    let responseData;
    yield axios
      .get("https://nodesense.github.io/api/products.json")
      .then(response => {
        responseData = response && response.data;
        responseData.forEach(item =>
          Object.assign(item, {
            image:
              "https://rukminim1.flixcart.com/image/832/832/jog2nbk0/mobile/e/x/b/mi-redmi-e7t-na-original-imafazxdh2bd6hep.jpeg?q=70",
            rating: 4.4
          })
        );
      });
    yield put({ type: actionTypes.JSON_DATA_RECEIVED, payload: responseData });
  } else {
    yield put({ type: actionTypes.LOADING, payload: [] });
  }
}

function* productwather() {
  yield takeLatest(actionTypes.LOADING, productData);
}

export default function* rootSaga() {
  yield all([call(productwather)]);
}
