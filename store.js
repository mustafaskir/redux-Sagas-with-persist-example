import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();
import rootSaga from './sagas/RootSaga'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers'; // the value from combineReducers

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const persistReducerr = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistReducerr,{},applyMiddleware(sagaMiddleware));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)