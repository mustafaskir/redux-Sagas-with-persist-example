
import { INCREMENT, DECEREMENT } from '../actions/actionsTypes'

export default (times = 0,action) => {
    switch(action.type)
    {
        case INCREMENT:
            return times + action.payload

        case DECEREMENT:
        return times - action.payload

        default:
            return times;
    }
}