import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18nVolc/i18n';
ReactDOM.render(
  <Suspense fallback="Loading...">
    <App />
  </Suspense>,
  document.getElementById('root')
);