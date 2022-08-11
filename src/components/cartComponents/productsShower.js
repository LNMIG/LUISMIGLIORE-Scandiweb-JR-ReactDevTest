import { Component } from 'react';
import WrapperLeft from './wrapperLeft';
import WrapperRight from './wrapperRight';
import './productsShower.css';

class ProductsShower extends Component {
    render (){

        return (
            <div className={this.props.class}>
                <WrapperLeft product={this.props.product}/>
                <WrapperRight product={this.props.product}/>
            </div>
        )
    }
}
export default ProductsShower;