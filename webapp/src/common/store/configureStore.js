import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchMiddleware from '../middlewares/fetchMiddleware';
import rootReducer from '../../reducers/index';

const configureStore = () => {
    let middlewares = [thunk, fetchMiddleware];
    
    // add logger for non production environments 
    if (process.env.NODE_ENV !== 'production') {
        middlewares = [...middlewares, createLogger({})];
    }
    return createStore(
        rootReducer,
        applyMiddleware(...middlewares))
};

export default configureStore;
