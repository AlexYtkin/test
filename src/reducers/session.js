import { AUTH }  from '../constants/actionTypes';

//const initialState = JSON.parse(window.localStorage.getItem('auth')) || {};

const initialState = {
    isAuth: false
}

function session(state = initialState, action) {
    switch (action.type) {
        case AUTH:
            return {...state, isAuth: action.isAuth};
        default:
            return state;
    }
}

export default session;