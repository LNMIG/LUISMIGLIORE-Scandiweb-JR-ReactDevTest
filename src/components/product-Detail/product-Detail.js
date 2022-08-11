import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid'
import clearProductDetails from "../../redux/actions/clearProductDetails";
import postProductToCart from '../../redux/actions/postProductToCart';
import ProductDetailAttribute from "./product-DetailAttribute";
import ProductDetailPrice from "./product-DetailPrice";
import ProductDetailBrandName from './product-DetailBrandName';
import ProductDetailAddToCart from './product-DetailAddToCart';
import ProductDetailDescription from './product-DetailDescription';
import ProductDetailImageSlide from './product-DetailImageSlide';
import './product-Detail.css';

class ProductDetail extends Component {

    constructor (props) {
        super(props);
        this.state={};
    }

    onClickImage = (onClick) => {
        this.setState(prevState => ({...prevState, currentImage: onClick.target.src}))
    }

    onClickAddToCart = () => {
        let copyInDeepSelectedProduct = JSON.parse(JSON.stringify(this.props.productDetails))
        let copyInDeepPastProducts = JSON.parse(JSON.stringify(this.props.postedProductsToCart))
        copyInDeepSelectedProduct.attByDefault = Object.values(this.state).slice(0,-1)
        copyInDeepSelectedProduct.idForDeletion = uuidv4()
        copyInDeepSelectedProduct.quantity = 1
        
        this.props.postProductToCart(copyInDeepPastProducts, copyInDeepSelectedProduct)
    }

    onClickAttribute = (selected) => {
        let stated = []
        for (let i=0; i<this.props.productDetails.attributes.length; i++) {
            stated.push(this.state[i])
        }
        stated.splice(selected.target.id, 1, {id: selected.target.name, value : selected.target.value})
        this.setState((state) => ({...state, ...stated}))
    }
    
    componentDidUpdate (prevProps, _prevState) {
        if(this.props.productDetails.id !== prevProps.productDetails.id) {
            let attributeStateLoad = []

            for (let i=0; i<this.props.productDetails.attributes.length; i++) {
                attributeStateLoad.push({id: this.props.productDetails.attributes[i].id, value: this.props.productDetails.attributes[i].items[0].value})
            }

            this.setState((state) => ({...state, ...attributeStateLoad}))
            this.setState((state) => ({...state, currentImage: this.props.productDetails.gallery[0]}))
        }
    }

    componentWillUnmount(){
        this.props.clearProductDetails()
    }

    render () {
        
        if (Object.entries(this.props.productDetails).length === 0) {
            return (
                <div className='productCardLoading'>
                    <h2>Loading...</h2>
                </div>
            )
        }

        let currentCurrency = []
        if (this.props.postedCurrentCurrency.length === 0) {
            currentCurrency = [{label: "USD", symbol: "$"}]
        } else {
            currentCurrency = this.props.postedCurrentCurrency
        }

        let currentImage = this.state.currentImage ===''? this.props.productDetails.gallery[0] : this.state.currentImage

        return (
            <div className="productDetailContainer">
                < ProductDetailImageSlide gallery={this.props.productDetails.gallery} onClickImage={this.onClickImage}/>
                <div className="second">
                    <img src={currentImage} alt="view here" className='imageMain'/>
                    <div className="grouped">
                        < ProductDetailBrandName brand={this.props.productDetails.brand} name={this.props.productDetails.name}/>
                        < ProductDetailAttribute attributes={this.props.productDetails.attributes} state={this.state} onClickAttribute={this.onClickAttribute}/>
                        < ProductDetailPrice currentCurrency={currentCurrency} prices={this.props.productDetails.prices} />
                        < ProductDetailAddToCart onClick={this.onClickAddToCart} />
                        < ProductDetailDescription description={this.props.productDetails.description} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productDetails: state.productDetails,
        postedCurrentCurrency: state.postedCurrentCurrency,
        postedProductsToCart: state.postedProductsToCart,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
      clearProductDetails: () => dispatch(clearProductDetails()),
      postProductToCart: (pastSelection, currentSelection) => dispatch(postProductToCart(pastSelection, currentSelection)),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)