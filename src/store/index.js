import { createStore, applyMiddleware } from 'redux';
import session  from '../reducers/session';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

//export const store = createStore( session, {});
//logout
//login

/*
export default function configureStore(){
    const store = compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(createLogger())
    )(createStore)(session)
    return store
}
*/

export const store = createStore(
    session,
    applyMiddleware(thunkMiddleware, logger)
)