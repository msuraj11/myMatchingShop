import * as actionTypes from "../constants/actionTypes";

const initialState = { repo_data: [], loading: false };
export const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.JSON_DATA:
      return { ...state, repo_data: [], loading: true };
    case actionTypes.JSON_DATA_RECEIVED:
      return { ...state, repo_data: action.payload, loading: false };
    default:
      return state;
  }
};
