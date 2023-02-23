import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { Header } from './components/Header';
import { MenuLateral } from './components/MenuLateral';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <MenuLateral />
      <Routes>
        <Route path='/' element={<App />} exact />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
