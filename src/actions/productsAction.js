import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  SORT_FETCHED_PRODUCTS_BY,
  FILTER_BRAND,
  FILTER_TYPE
} from "../constants";

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS
});

export const fetchProductsSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: data
});

export const fetchProductsError = data => ({
  type: FETCH_PRODUCTS_ERROR,
  payload: data
});

export const sortFetchedProductstBy = (evt, data) => ({
  type: SORT_FETCHED_PRODUCTS_BY,
  payload: data.value
});

export const filterBrand = (evt, data) => ({
    type: FILTER_BRAND,
    payload: data.value
});

export const filterType = (evt, data) => ({
    type: FILTER_TYPE,
    payload: data.value
});
