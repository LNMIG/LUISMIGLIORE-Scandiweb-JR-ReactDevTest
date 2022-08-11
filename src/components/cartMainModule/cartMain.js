import { Component } from 'react';
import { connect } from 'react-redux';
import NameShower from '../cartComponents/nameShower';
import ProductsShower from '../cartComponents/productsShower';
import PriceShower from '../cartComponents/priceShower';
import OrderButton from '../cartComponents/generalUseButton';
//import {one} from './loads.js'

class MainCart extends Component {
    render (){
        let saved = this.props.postedProductsToCart
        return (
            <>
                <NameShower />
                {saved && saved.length > 0
                ? saved.map((product, index) => <ProductsShower key={index} class={'mainCartWrapper'} product={product}/>)
                :
                null
                }
                <PriceShower products={saved} currentCurrency={this.props.postedCurrentCurrency}/>
                <OrderButton classLink={'classLinkDenied'} navlink={'cart'} class={'order'} placeholder={'ORDER'}/>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        postedProductsToCart: state.postedProductsToCart,
        postedCurrentCurrency: state.postedCurrentCurrency,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainCart);