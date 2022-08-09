import React, { Component } from 'react';
//import { connect } from 'react-redux';
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

// const mapStateToProps = (state) => {
//     return {
//     };
//   }
  
// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
export default CartButton