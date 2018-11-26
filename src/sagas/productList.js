import { put, takeEvery, all, call } from "redux-saga/effects";
import { FETCH_PRODUCTS } from "../constants";
import apiHelper from "./apiHelper";
import {
  fetchProductsSuccess,
  fetchProductsError
} from "../actions/productsAction";

function* fetchProducts() {
  try {
    const res = yield call(apiHelper.fetchProducts);
    yield put(fetchProductsSuccess(res.data));
  } catch (error) {
    yield put(fetchProductsError(error));
  }
}

export default function* projectsSaga() {
  yield all([takeEvery(FETCH_PRODUCTS, fetchProducts)]);
}
