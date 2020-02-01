import * as actionTypes from "../constants/actionTypes";

export const jsonData = response => ({
  type: actionTypes.JSON_DATA,
  payload: response
});
