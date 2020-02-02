import * as actionTypes from "../constants/actionTypes";

export const jsonData = url => ({
  type: actionTypes.LOADING,
  payload: url
});


export const filteredDataAction = filteredItems => ({
  type: actionTypes.JSON_DATA_RECEIVED,
  payload: filteredItems
});
