import { INCREMENT, DECEREMENT } from '../actions/actionsTypes'
import { incAction } from '../actions/index'

import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest } from 'redux-saga/effects'

export function* sayHello(){
    console.log('hello world')
}

export function* watchIncrement(){
    yield takeLatest(INCREMENT, incerment)
    
}

function* incerment(){

    console.log('this is inc saga')
}

export function* watchDecrement(){
    yield takeLatest(DECEREMENT, decerement)
}

function* decerement(){
    console.log('this is Dec saga')
}