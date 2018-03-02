// import Types
import {
    FETCH,
    FETCH_SUCCESS,
    FETCH_FAILED
} from '../actions/actionsTypes'
//define Initial
const INITIAL = {
    data: [],
    status: '',
    loading: false
}

export default (state = INITIAL, action) => {
    switch(action.type){
        case FETCH:
            return {...state, status: 'loading...',loading:true}
        
        case FETCH_SUCCESS:
            return {...state, status:'',loading:false , data: action.payload}

        case FETCH_FAILED:
            return {...state, status: 'Error In Fetching Data, sorry', loading:false}

        default:
            return state;
    }
}