import 'isomorphic-fetch';

const handleResponse = (json, handler, dispatch) => {
    if (handler) {
        dispatch(handler(json));
    }
};

const fetchMiddleware = store => next => action => {
    if (!action || !action.fetchConfig) {
        return next(action);
    }

    const dispatch = store.dispatch;
    const config = action.fetchConfig;

    const clonedAction = JSON.parse(JSON.stringify(action));
    delete clonedAction.fetchConfig;

    dispatch(clonedAction);

    const { path, method, body } = config;

    const successHandler = config.onSuccess;
    const exceptionHandler = config.onException;

    return fetch(path,
        {
            method,
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(json => {
            handleResponse(json, successHandler, dispatch);
        })
        .catch(error => {
            handleResponse(error, exceptionHandler, dispatch);
        });
};

export default fetchMiddleware;
