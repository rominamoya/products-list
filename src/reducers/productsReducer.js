import {
  FETCH_PRODUCTS_SUCCESS,
  SORT_FETCHED_PRODUCTS_BY,
  FILTER_BRAND,
  FILTER_TYPE
} from "../constants";

const defaultState = {
  productList: [],
  filters: [],
  brands:[],
  types:[],
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
    console.log("text", state.filters)
      return {
        ...state,
        brands: action.payload
      };
      case FILTER_TYPE:
        return {
          ...state,
          types: action.payload
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
