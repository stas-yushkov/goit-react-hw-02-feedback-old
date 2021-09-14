import React from 'react';
import ReactDom from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
