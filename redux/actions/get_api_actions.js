


//Action Types
export const GET_API_LOAD_DATA = "GET_API_LOAD_DATA";
export const UPDATE_GET_API_DATA = "UPDATE_GET_API_DATA";

//Action Creator
export const get_api_load = () => ({
    type: GET_API_LOAD_DATA    
});


export const update_get_api_data = (api_data) => ({
    type: UPDATE_GET_API_DATA,
    value: api_data
});