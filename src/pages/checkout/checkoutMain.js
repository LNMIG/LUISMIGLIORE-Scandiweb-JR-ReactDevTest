import { Component } from "react";
import { connect } from "react-redux";
import checkoutProducts from "../../redux/actions/checkoutProducts";
import Checkout from '../../components/checkoutComponents/checkout';
import './checkoutMain.css'

export class CheckoutMain extends Component {

    componentDidMount() {
        this.props.checkoutProducts(this.props.postedProductsToCart, this.props.postedCurrentCurrency)
    }

    render() {
        return (
            <div className="checkoutContainer">
                <Checkout />
            </div>
        );
    };
};
const mapStateToProp = (state) => {
    return {
        postedCurrentCurrency: state.postedCurrentCurrency,
        postedProductsToCart: state.postedProductsToCart,
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        checkoutProducts: (products, currency) => dispatch(checkoutProducts(products, currency)),
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(CheckoutMain)