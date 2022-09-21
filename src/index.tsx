import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// CONTEXT
import BlurContextProvider from './context/BlurPageContext';
import APIContextProvider from './context/APIContext';

// ROUTER
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <APIContextProvider>
        <BlurContextProvider>
          <App />
        </BlurContextProvider>
      </APIContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
