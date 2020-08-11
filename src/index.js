import React from 'react';
import ReactDom from 'react-dom';
import './index.modules.css'

import App from './App';

const app = (
    <App />
)

ReactDom.render(app , document.querySelector('#root'));