import React, { Component} from "react";
import { connect } from 'react-redux';
//import * as SessionActions from '../actions/SessionActions';

/*
const reactData = {
    username: 'admin',
    password: '12345'
}
*/

class Login extends Component {
    state = {
        auth: false,
        username: '',
        password: ''
    }

    render(){
        console.log(this.props.isAuth);
        const errorMessage = "Имя пользователя или пароль введены не верно";
        return(

            <div className="ui container">
                <div className="ui grid">
                    <div className="column">
                        <form className="ui form" onSubmit={this.handleSubmit}>
                            <div className="field">
                                <label>Username:</label>
                                <input type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                            </div>
                            <div className="field">
                                <label>Password:</label>
                                <input type="text" name="password" placeholder="Password" onChange={this.handleChange} />
                            </div>
                            <button className="ui button" type="submit" >Войти</button>
                        </form>
                    </div>
                </div>
                {this.state.auth ? errorMessage: '' }
            </div>
        )
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }
    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.authenticated(username, password);

    }
    /*
    handleSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;
        if (username === reactData.username && password === reactData.password) {
            this.setState({auth: false});
            localStorage.setItem('auth',true);
        }
        else {
            this.setState({auth: true});
        }
    }
    */

}

const mapStateToProps = function(state) {
    return {
        isAuth: state.isAuth
    };
}


export default connect( mapStateToProps)(Login);