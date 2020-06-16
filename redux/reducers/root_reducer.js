

import {combineReducers} from 'redux';

import get_api_reducer from './get_api_reducer';
import post_api_reducer from './post_api_reducer';
// some other reducers

//redux form related
import { createForms } from 'react-redux-form';

//you should have this form structure iin other file for organization
const initialUserState = {
    firstName: '',
    lastName: ''
  };

const rootReducer = combineReducers({
    get_api: get_api_reducer,
    post_api: post_api_reducer,
    ...createForms({
        post_form: initialUserState,
        //some other forms
      }),

    //some other reducers
});


export default rootReducer