import counterReducer from './counter';
import loggedReducer from './auth';
import {combineReducers} from 'redux';

const theReducer = combineReducers({
    counter : counterReducer,
    logger : loggedReducer
});

export default theReducer;