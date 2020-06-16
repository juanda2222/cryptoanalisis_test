

import { put, call, takeEvery, takeLatest} from 'redux-saga/effects'

//import actions
import {GET_API_LOAD_DATA, update_get_api_data} from  "../actions/get_api_actions";

//import the api manager
import GetData from "../../clientApi/clientGetApi"

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* generator_load_get_data() {

    //fetch from the api
    const data = yield call(GetData)

    // generate the redux action
    yield put(update_get_api_data(data))
}

export function* AsyncGetWatcher() {
    console.log("Loading data from post api...")
    yield takeLatest(GET_API_LOAD_DATA, generator_load_get_data) //launch 
}