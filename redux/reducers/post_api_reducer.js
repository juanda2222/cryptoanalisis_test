

import {UPDATE_POST_API_DATA} from '../actions/post_api_actions';


const post_api_reducer = (
    state = {
        is_loading:true,
        api_data: null,
    }, 
    action) => {
    switch (action.type) {
        case UPDATE_POST_API_DATA:
            console.log("Data updated from post api")
            //await some_get()
            return {
                ...state, 
                api_data: JSON.stringify(action.value),
                is_loading: false,
            };
        default:
            return {...state};
    }
};

export default post_api_reducer;