import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './media.scss'
import {App} from './App';
import { Provider } from 'react-redux';
import { store } from './Redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

