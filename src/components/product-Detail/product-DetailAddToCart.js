import { Component } from "react";
import './product-DetailAddToCart.css'

class ProductDetailAddToCart extends Component {

    render () {
        
        return (
            <button className='button' onClick={this.props.onClick}>ADD TO CART</button>
        )
    }
}

export default ProductDetailAddToCart