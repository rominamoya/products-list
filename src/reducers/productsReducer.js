import {
  FETCH_PRODUCTS_SUCCESS,
  SORT_FETCHED_PRODUCTS_BY,
  FILTER_BRAND
} from "../constants";

const defaultState = {
  productList: [],
  filters: [],
  sorting: null
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productList: action.payload
      };
    case FILTER_BRAND:
      return {
        ...state,
        filters: action.payload
      };
    case SORT_FETCHED_PRODUCTS_BY: {
      return {
        ...state,
        sorting: action.payload
      };
    }

    default:
      return state;
  }
};
