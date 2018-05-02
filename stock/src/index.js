import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store()}>
      <AppRouter />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
