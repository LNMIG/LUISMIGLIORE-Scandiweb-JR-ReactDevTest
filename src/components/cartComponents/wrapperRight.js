import { Component } from 'react';
import ProductQuantity from './productQuantity';
import ImageSlider from './imagesSlider';
import './wrapperRight.css';

class WrapperRight extends Component {
    render (){
        
        return (
            <div className='wrapperRight'>
                <ProductQuantity 
                    quantity={this.props.product.quantity}
                    idForDeletion={this.props.product.idForDeletion}
                    product={this.props.product}
                />
                <ImageSlider
                    gallery={this.props.product.gallery}
                />
            </div>
        )
    }
}
export default WrapperRight