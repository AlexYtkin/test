import { AUTH } from '../constants/actionTypes';

export const auth = isAuth => ({
    type: AUTH,
    isAuth
});

function sendRequestAuth(username, password) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (username === "admin" && password === "12345") {
                return resolve(true)
            }
            else {
                return reject(new Error("Введены неверные данные"))
            }
        }, 1000);
    })
}

export function authenticated (username, password) {
    return dispatch => {
        sendRequestAuth(username, password)
            .then(success=>{dispatch(auth(true))})
            .catch(error=>{dispatch(auth(false))})
    }
}