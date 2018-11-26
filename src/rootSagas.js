import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import productListSaga from './sagas/productList';

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
    yield all([
        productListSaga()
    ]);
}
