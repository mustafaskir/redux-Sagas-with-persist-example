import { INCREMENT, DECEREMENT, FETCH } from './actionsTypes'

export const incAction = (step) => {
    // console.log(step)
    return {
        type: INCREMENT,
        payload: step
    }
}

export const decAction = (step) => {
    // console.log(step)
    return {
        type: DECEREMENT,
        payload: step
    }
}

export const fetchApi = () => {
    return {
        type: FETCH
    }
}