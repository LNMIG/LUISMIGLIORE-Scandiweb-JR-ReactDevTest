import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import HeaderDesktop from './components/header-Desktop/header-Desktop';
import ProductList from "./pages/productList/productList";
import Cart from './pages/cart/cart'
import ProductDetail from './pages/productDetail/productDetail';
import CheckoutMain from './pages/checkout/checkoutMain';
import Error404 from './pages/error404/error404';

class App extends Component {
  render () {
    return (
      <div>
        <HeaderDesktop />
        <Switch>
          <Route exact path='/' component={ ProductList } />
          <Route exact path='/cart' component={ Cart } />
          <Route exact path='/productdetails/:id' component={ ProductDetail } />
          <Route exact path='/checkout' component={ CheckoutMain }/>
          <Route path='/*' component={ Error404 } />
        </Switch>
      </div>
    );
  }
}

export default App;