import { Component } from 'react';
import ProductQuantity from './productQuantity';
import ImageSlider from './imagesSlider';
import './wrapperRight.css';

class WrapperRight extends Component {
    render (){
        
        return (
            <div className='wrapperRight'>
                <ProductQuantity 
                    product={this.props.product}
                />
                <ImageSlider
                    product={this.props.product}
                />
            </div>
        )
    }
}
export default WrapperRight