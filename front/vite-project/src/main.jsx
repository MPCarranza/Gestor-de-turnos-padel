import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot en lugar de react-dom/client
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store.js'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store ={store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);