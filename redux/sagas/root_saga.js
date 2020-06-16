

import { all } from 'redux-saga/effects'


//import sagas
import {AsyncPostWatcher} from "./post_api_saga"
import {AsyncGetWatcher} from "./get_api_saga"




// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    AsyncPostWatcher(),
    AsyncGetWatcher()
  ])
}