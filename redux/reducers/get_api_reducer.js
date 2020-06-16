

import {UPDATE_GET_API_DATA} from '../actions/get_api_actions';

const get_api_reducer = (
    state = {
        is_loading:true,
        api_data: null,
    }, 
    action) => {
    switch (action.type) {
        case UPDATE_GET_API_DATA:
            console.log("Data loaded from get api...")
            return {
                ...state,
                api_data: JSON.stringify(action.value),
                is_loading: false,
            };
        default:
            return {...state};
    }
};

export default get_api_reducer;