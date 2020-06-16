
//redux related
import {createStore, AnyAction, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';

//sagas related
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/root_saga"


const saga = createSagaMiddleware();

const initializeStore = () => {
    
    const store = createStore(
        rootReducer,
        applyMiddleware(saga)
    );
    saga.run(rootSaga)

    return store
}



export default initializeStore;