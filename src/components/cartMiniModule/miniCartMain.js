import { Component } from "react";
import { connect } from "react-redux";
import ProductsShower from '../cartComponents/productsShower';
import PriceShower from '../cartComponents/priceShower';
import ViewBagButton from '../cartComponents/generalUseButton';
import CheckOutButton from '../cartComponents/generalUseButton';
import postBlocker from '../../redux/actions/postBlocker.js';
import './miniCartMain.css'

class MiniCart extends  Component {

    constructor(props) {
        super(props);
        this.state={counter: 0}
    }

    onClick = () => {
        this.props.postBlocker()
    }

    componentDidMount() {
        let quantity = this.props.postedProductsToCart.reduce((prev, current) => prev + current.quantity, 0)
            this.setState({counter: quantity})
    }
    componentDidUpdate (prevProps, _prevState) {
        if(this.props.postedProductsToCart !== prevProps.postedProductsToCart) {
            let quantity = this.props.postedProductsToCart.reduce((prev, current) => prev + current.quantity, 0)
            this.setState({counter: quantity})
        }
    }

    render (){

        let saved = this.props.postedProductsToCart
        let currentCurrency = this.props.postedCurrentCurrency

        return (
            <>
                <div className="miniCartWrapper">

                    <div className="miniCartShower">

                        <div className="myBagTitle">
                            <span className="myBag">MyBag,</span><span className="myBagItems">{this.state.counter} items</span>
                        </div>

                        {saved && saved.length > 0
                        ? saved.map((product, index) => <ProductsShower
                            key={index}
                            class={'miniCartProductShower'}
                            product={product}
                            currentCurrency={currentCurrency}
                            whereToShow={'miniCart'}
                            />)
                        :
                        <div className=''>
                            <span className='emptyBag'>Nothing in your bag yet!</span>
                        </div>
                        }

                        <PriceShower products={saved} currentCurrency={currentCurrency} typo={''}/>
                    </div>

                    <div className="buttonsContainer">
                        <ViewBagButton classLink={'classLink'} navlink={'cart'} class={'viewBag'} placeholder={'VIEW BAG'} onClick={this.onClick}/>
                        <CheckOutButton classLink={'classLink'} navlink={''} class={'checkout'} placeholder={'CHECK OUT'}/>
                    </div>

                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        postedProductsToCart: state.postedProductsToCart,
        postedCurrentCurrency: state.postedCurrentCurrency,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        postBlocker: () => dispatch(postBlocker()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MiniCart)