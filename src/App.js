import React, { Component } from 'react';
import { Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

import HeaderDesktop from './components/header-Desktop/header-Desktop';
import Category from "./pages/category/category";
import Cart from './pages/cart/cart'
import ProductDetail from './components/product-Detail/product-Detail';

class App extends Component {
  render () {
    return (
      <div>
        <HeaderDesktop />
          <Route exact path='/' component={ Category } />
          <Route exact path='/cart' component={ Cart } />
          <Route exact path='/productdetails/:id' component={ ProductDetail } />
      </div>
    );
  }
}

export default App;