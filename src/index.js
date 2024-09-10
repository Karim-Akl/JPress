import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './LanguageProvider'; // Import LanguageProvider
import './i18n'; 
ReactDOM.render(
  <BrowserRouter>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
