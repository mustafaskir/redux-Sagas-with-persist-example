import { connect } from 'react-redux'
import CounterComponent from '../components/Counter'

//actions
import { incAction, decAction, fetchApi } from '../actions/index'

const mapStateToProps = state => {
    return {
        times: state.counterReducer,
        Api: state.ApiReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInc: (step) => {
            dispatch(incAction(step))
        },
        onDec: (step) => {
            dispatch(decAction(step))
        },
        onFetch: () => {
            dispatch(fetchApi())
        }
    }
}

const counterContainer = connect(mapStateToProps,mapDispatchToProps)(CounterComponent)
export default counterContainer;