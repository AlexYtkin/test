import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <div className="ui container">
        <div className="ui grid">
            <div className="column">
                <div className="ui fixed inverted menu">
                   <div className="header item"><Link to="/">На главную</Link></div>
                   <div className="item"><Link to="/news">Новости</Link></div>
                   <div className="item"><Link to="/profile">Профиль</Link></div>
                </div>
            </div>
        </div>
        <div className="ui grid">
            <div className="column"></div>
            <div className="column"></div>
        </div>
      </div>
    );
  }
}

export default App;
