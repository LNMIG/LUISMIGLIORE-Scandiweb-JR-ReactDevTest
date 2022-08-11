import { Component } from 'react';
import BrandName from '../product-Detail/product-DetailBrandName'
import ProductDetailPrice from '../product-Detail/product-DetailPrice';
import ProductDetailAttribute from '../product-Detail/product-DetailAttribute';
import './wrapperLeft.css';

class WrapperLeft extends Component {
    
    render (){
        return (
            <div className='wrapperLeft'>
                <BrandName 
                    brand={this.props.product.brand}
                    name={this.props.product.name}
                    whereToShow={'mainCartBN'}
                />
                <ProductDetailPrice
                    currentCurrency={this.props.currentCurrency}
                    prices={this.props.product.prices}
                    whereToShow={'mainCartPD'}
                />
                <ProductDetailAttribute
                    attributes={this.props.product.attributes}
                    state={this.props.product.attByDefault}
                    idForDeletion={this.props.product.idForDeletion}
                    whereToShow={'mainCartPA'}
                />
            </div>
        )
    }
}
export default WrapperLeft