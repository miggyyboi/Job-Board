import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { DataContextProvider } from './context/DataContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </Provider>
  </React.StrictMode>,
);
