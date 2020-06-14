

import {POST_API_LOAD_DATA} from '../actions/post_api_actions';

const post_api_reducer = (
    state = {
        api_data: {},
    }, 
    action) => {
    switch (action.type) {
        case POST_API_LOAD_DATA:
            console,log("Loading data from post api...")
            return {
                ...state, 
                post_data: state.value + 1
            };
        default:
            return {...state};
    }
};

export default post_api_reducer;