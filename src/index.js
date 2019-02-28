import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './semantic/dist/semantic.min.css';
import Rout from './routes/Rout';
import { Provider } from 'react-redux';
import { store } from './store/index';

//const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <Rout />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
