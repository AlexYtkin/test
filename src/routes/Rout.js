import React, { Component} from 'react';
import { Router, Route} from 'react-router-dom';
import App from '../components/App';
import News from '../components/News';
import Profile from '../components/Profile';
import Login from '../components/Login';
import history from '../history';
import PrivateRoute from '../components/PrivateRoute';


class Rout extends Component {

    render(){
        return(
            <Router history={history}>
              <div>
                <Route path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/news" component={News} />
                <PrivateRoute path="/profile" component={Profile}/>
              </div>
            </Router>
        )
    }
}
export default Rout;


