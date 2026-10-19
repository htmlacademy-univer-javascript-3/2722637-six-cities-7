import { App } from './App/app';

import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offersCount = 312;

root.render(
  <React.StrictMode>
    <App offersCount = {offersCount}/>
  </React.StrictMode>
);
