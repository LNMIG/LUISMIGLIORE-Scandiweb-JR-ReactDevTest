import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import getProductById from '../../redux/actions/getProductById';
import postProductToCart from '../../redux/actions/postProductToCart';
import Vector from '../../assets/addToCart.png';
import './product-Card.css';

class ProductCard extends Component {

    addAttrByDefault = (addAttByDefault) => {
        addAttByDefault.attByDefault = addAttByDefault.attributes.map(each => {return {id: each.id, value: each.items[0].value}})
        addAttByDefault.idForDeletion = uuidv4()
        addAttByDefault.quantity = 1
        return addAttByDefault
    }

    onClickNavigation = (productId) => {
        this.props.getProductById(productId)
    }
    onClickCartButton = (selectedProductToAdd) => {
        let copyInDeepSelectedProduct = JSON.parse(JSON.stringify(selectedProductToAdd))
        let copyInDeepPastProducts = JSON.parse(JSON.stringify(this.props.postedProductsToCart))
        
        if (copyInDeepSelectedProduct.attributes && copyInDeepSelectedProduct.attributes.length > 0) {
            this.props.postProductToCart(copyInDeepPastProducts, this.addAttrByDefault(copyInDeepSelectedProduct))
        } else {
            copyInDeepSelectedProduct.idForDeletion = uuidv4()
            copyInDeepSelectedProduct.quantity = 1
            this.props.postProductToCart(copyInDeepPastProducts, copyInDeepSelectedProduct)
        }
    }

    render() {

        let currentCurrency = []
        if (this.props.postedCurrentCurrency.length === 0) {
            currentCurrency = [{label: "USD", symbol: "$"}]
        } else {
            currentCurrency = this.props.postedCurrentCurrency
        }

        const price = (prices) => {
            let currentPriceAmount = prices.filter(price => price.currency.symbol === currentCurrency[0].symbol)
            return currentPriceAmount[0].amount
        }

        if (this.props.paginationData.length === 0) {
            return (
                <div className='productCardLoading'>
                    <h2>Loading products...</h2>
                </div>
            )
        }

        return (
            <div className='wraperProductCard'>
                    {this.props.paginationData.map(product => {return (
                        <div className={product.inStock ? 'productCardContainer' : 'outOfStock'} key={product.id}>
                        <div className='imageContainer'>
                            <NavLink to={product.inStock ? `/productdetails/${product.id}` : ``} className="navlink" onClick={()=>this.onClickNavigation(product.id)}>
                                <img src={product.gallery[0]} alt="view here" className='image'/>
                                {!product.inStock ? <div className='noStock'> OUT OF STOCK</div> : ''}
                            </NavLink>
                            <div  className='circleIcon'>
                                {product.inStock
                                ?
                                    <button className='surface' onClick={()=>this.onClickCartButton(product)}>
                                        <img src={Vector} alt='' className='vector' />
                                    </button>
                                :
                                 ''
                                }
                            </div>
                        </div>

                        <div className='spacer'></div>
                        <div className='content'>
                            <div className='title'>{`${product.brand} ${product.name}`}</div>
                            <div className='title'>
                                <div className='element'>
                                    {`${currentCurrency[0].symbol} ${price(product.prices)}`}
                                </div>
                            </div>
                        </div>
                        </div>
                    )})}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
            productsByCategory: state.productsByCategory,
            paginationData: state.paginationData,
            postedCurrentCurrency: state.postedCurrentCurrency,
            postedProductsToCart: state.postedProductsToCart,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProductById: (productId) => dispatch(getProductById(productId)),
        postProductToCart: (pastSelection,currentSelection) => dispatch(postProductToCart(pastSelection, currentSelection)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);