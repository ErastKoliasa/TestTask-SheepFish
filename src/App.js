import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductsListContainer from './components/Products/ProductsListContainer';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import NotfoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
    return (
      <div>
        <NavBar />
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<NotfoundPage/>} />
            <Route path='/products' element={<ProductsListContainer/>} />
         </Routes>
      </BrowserRouter>
      </div>
    );
  }

export default App;
