

import {combineReducers} from 'redux';

import get_api_reducer from './get_api_reducer';
import post_api_reducer from './post_api_reducer';
// some other reducers

const rootReducer = combineReducers({
    get_api: get_api_reducer,
    post_api: post_api_reducer,
    //some other reducers
});

export default rootReducer;