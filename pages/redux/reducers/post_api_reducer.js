

import {POST_API_LOAD_DATA} from '../actions/post_api_actions';

const some_get = async () => {
    setTimeout(() => {
        console.log('Data received!')
      }, 1000);
}

const post_api_reducer = (
    state = {
        is_loading:true,
        api_data: null,
    }, 
    action) => {
    switch (action.type) {
        case POST_API_LOAD_DATA:
            console.log("Loading data from post api...")
            //await some_get()
            return {
                ...state, 
                api_data: "this is some api data bby",
                is_loading: false,
            };
        default:
            return {...state};
    }
};

export default post_api_reducer;