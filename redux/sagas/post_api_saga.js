

import { put, takeEvery, takeLatest, call} from 'redux-saga/effects'

//import actions
import {POST_API_LOAD_DATA, update_post_api_data} from  "../actions/post_api_actions";

//import the api manager
import {DumbPromise, PostData} from "../../clientApi/clientPostApi"



export function* generator_load_post_data(action) {

    //fetch from the api
    const data = yield call(PostData, action.data)

    // generate the redux action
    yield put(update_post_api_data(data))
}

export function* AsyncPostWatcher() {
    console.debug("Loading data from post api...")
    yield takeLatest(POST_API_LOAD_DATA, generator_load_post_data) //launch 
}