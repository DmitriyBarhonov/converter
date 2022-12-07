import {applyMiddleware, combineReducers,createStore } from 'redux'
import exchangeRatesReducer from './exchangeRatesReducer';
import converterReducer from './converterReducer';
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    exchangeRates: exchangeRatesReducer,
    converter: converterReducer
});


let storeRedux = createStore(reducers, applyMiddleware(thunkMiddleware));

export default storeRedux;

