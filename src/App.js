import React, { Component } from 'react';
import { Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

import HeaderDesktop from './components/header-Desktop/header-Desktop';
import ProductList from "./pages/productList/productList";
import Cart from './pages/cart/cart'
import ProductDetail from './pages/productDetail/productDetail';
import CheckoutMain from './pages/checkout/checkoutMain';

class App extends Component {
  render () {
    return (
      <div>
        <HeaderDesktop />
          <Route exact path='/' component={ ProductList } />
          <Route exact path='/cart' component={ Cart } />
          <Route exact path='/productdetails/:id' component={ ProductDetail } />
          <Route exact path='/checkout' component={ CheckoutMain }/>
      </div>
    );
  }
}

export default App;