import { combineReducers } from 'redux'

import counterReducer from './counterReducer'
import ApiReducer from './ApiReducer'

export default combineReducers({
    counterReducer,
    ApiReducer
})