import { delay } from 'redux-saga'
import { all } from 'redux-saga/effects'

import { sayHello, watchDecrement, watchIncrement } from './counterSagas'
import { watchFetch } from './ApiSagas'

export default function* rootSaga(){
    yield all([
        sayHello,
        watchDecrement(),
        watchIncrement(),
        watchFetch(), 
    ])
}