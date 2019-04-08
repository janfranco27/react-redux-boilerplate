import React from 'react';
import ReactDOM from 'react-dom';
import { Provider}  from 'react-redux'
import './index.css';
import store from './store'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {

  const Application = (
    <Provider store={store}>
      <App />
    </Provider>
  )

  ReactDOM.render(
    Application,
    document.getElementById('root')
  )
}


renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
