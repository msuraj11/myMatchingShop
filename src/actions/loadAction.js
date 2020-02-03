import * as actionTypes from "../constants/actionTypes";

export const jsonData = url => ({
  type: actionTypes.LOADING,
  payload: url
});


export const filteredDataAction = (filteredItems, userInput) => ({
  type: actionTypes.FILTERED_DATA,
  payload: {
    filteredItems,
    userInput
  }
});
