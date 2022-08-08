import { Component } from "react";
import './product-DetailBrandName.css'

class ProductDetailBrandName extends Component {

    render () {
        
        return (
            <div className="bn">
                <div className='brand'>{this.props.brand}</div>
                <div className='name'>{this.props.name}</div>
            </div>
        )
    }
}

export default ProductDetailBrandName