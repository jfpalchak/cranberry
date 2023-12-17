import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { getCredentials } from './utils/CredentialHelpers';
import { fetchUserData } from './store/authActions';
import { store } from './store/store';
import './index.css';

if(getCredentials().token) {
  store.dispatch(fetchUserData());
}

console.log("Get Credentials: ", getCredentials())

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

