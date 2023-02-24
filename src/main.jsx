import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { Header } from './components/Header';
import { MenuLateral } from './components/MenuLateral';
import { Posts } from './components/Posts/Posts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <MenuLateral />
      <Routes>
        <Route path='/' element={<App />} exact />
        <Route path='/posts' element={<Posts />} />
        <Route path='/pictures' element={<App />} />
        <Route path='/about' element={<App />} />
        <Route path='/contatos' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
