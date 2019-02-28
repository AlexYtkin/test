import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const auth = JSON.parse(window.localStorage.getItem('auth'));

const PrivateRoute = ({component:Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render={props =>
                auth ? (
                    <Component {...props} />
                ): (
                    <Redirect
                        to='/login'
                    />
                )
            }
        />
    )
};

export default PrivateRoute;

