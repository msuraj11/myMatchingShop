import * as actionTypes from "../constants/actionTypes";

const initialState = { repo_data: [], filtered_data: [], search_input: '', loading: false };
export const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, repo_data: [], loading: true };
    case actionTypes.JSON_DATA_RECEIVED:
      return { ...state, repo_data: action.payload, filtered_data: action.payload, loading: false };
    case actionTypes.FILTERED_DATA:
      return { ...state, filtered_data: action.payload.filteredItems, search_input: action.payload.userInput}
    default:
      return state;
  }
};
