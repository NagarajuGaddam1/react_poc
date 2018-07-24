import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store';
import { addArticle } from "./actions/action";
import { addBook } from "./actions/action";
window.store = store;
window.addArticle = addArticle;
window.addBook = addBook;

ReactDOM.render((
    <Provider store={store}>
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  ), document.getElementById('root'))
registerServiceWorker();
