

import {GET_API_LOAD_DATA} from '../actions/get_api_actions';

const get_api_reducer = (
    state = {
        api_data: {},
    }, 
    action) => {
    switch (action.type) {
        case GET_API_LOAD_DATA:
            console,log("Loading data from get api...")
            return {
                ...state, 
                value: state.value + 1
            };
        default:
            return {...state};
    }
};

export default get_api_reducer;