//import Types
// import effects
// create func && export watch
// import Api

import {
    FETCH,
    FETCH_SUCCESS,
    FETCH_FAILED
} from '../actions/actionsTypes'

import { testApi } from '../Api/api'

import { put, takeLatest } from 'redux-saga/effects'

export function* watchFetch(){
    yield takeLatest(FETCH, fetch);
}

function* fetch(){
    console.log('msg from saga api')
    try{
        const result = yield testApi();
        yield put({ type: FETCH_SUCCESS, payload: result })
    }catch(err){
        yield put({ type: FETCH_FAILED, payload: err })
    }
}