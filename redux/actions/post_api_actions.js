


//Action Types
export const POST_API_LOAD_DATA = "POST_API_LOAD_DATA";
export const UPDATE_POST_API_DATA = "UPDATE_POST_API_DATA";


//Action Creator
export const post_api_load = (json_form_data) => ({
    type: POST_API_LOAD_DATA,
    data:json_form_data
});

export const update_post_api_data = (api_data) => ({
    type: UPDATE_POST_API_DATA,
    value: api_data
});