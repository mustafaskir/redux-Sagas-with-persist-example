import React from 'react'
import { AppRegistry, AsyncStorage, ActivityIndicator } from 'react-native';
// import App from './App';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducres from './reducers/index'
import CounterContainer from './containers/Counter'
//redux-saga
// import createSagaMiddleware from 'redux-saga'
//middleware
// const sagaMiddleware = createSagaMiddleware();
//root saga
import rootSaga from './sagas/RootSaga'
// redux-persist
import { PersistGate } from 'redux-persist/lib/integration/react';
// from store
import { persistor, store } from './store';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            IsReady: true
        }
    }

    render(){
        return(
            <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <CounterContainer />
      </PersistGate>
    </Provider>
        )
    }
}
// sagaMiddleware.run(rootSaga)

AppRegistry.registerComponent('sagaExample', () => App);