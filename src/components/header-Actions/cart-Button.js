import React, { Component } from 'react';
import Cart from '../../assets/shoppingcartempty.svg'
import './cart-Button.css'

export class CartButton extends Component {

render () {
    return (
        <button className='cart'>
            <img className='carticon' src={Cart} alt='' />
        </button>
    )
}
}
export default CartButton