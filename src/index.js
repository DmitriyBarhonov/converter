import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import storeRedux from './redux/redux';
import { Provider } from 'react-redux';
import i18n from './18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={storeRedux}>
        <App store={storeRedux} />
      </Provider>
    </BrowserRouter>


);
