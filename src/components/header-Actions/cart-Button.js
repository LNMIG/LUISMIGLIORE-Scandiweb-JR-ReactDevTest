import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../assets/shoppingcartempty.svg'
import './cart-Button.css'

export class CartButton extends Component {

render () {
    return (
        <Link to='/cart'>
        <button className='cart'>
            <img className='carticon' src={Cart} alt='' />
        </button>
        </Link>
    )
}
}
export default CartButton