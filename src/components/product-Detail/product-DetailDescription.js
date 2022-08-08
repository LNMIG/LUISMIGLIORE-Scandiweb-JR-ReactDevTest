import { Component } from "react";
import './product-DetailDescription.css'

class ProductDetailDescription extends Component {

    render () {
        
        return (
            <div className='description' dangerouslySetInnerHTML={{ __html: this.props.description }} />
        )
    }
}

export default ProductDetailDescription