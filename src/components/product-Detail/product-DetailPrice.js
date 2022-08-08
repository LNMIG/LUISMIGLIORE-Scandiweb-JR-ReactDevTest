import { Component } from "react";
import './product-DetailPrice.css'

class ProductDetailPrice extends Component {

    render () {

        let currencySymbol = this.props.currentCurrency[0].symbol
        const amount = (prices) => {
            let currentAmount = this.props.prices.filter(price => price.currency.symbol === currencySymbol)
            return currentAmount[0].amount
        }

        return (
            <div className="productDetailPriceContainer">
                <div className='price'>PRICE:</div>
                <div className='amount'>{`${currencySymbol} ${amount(this.prices)}`}</div>
            </div>
        )
    }
}

export default ProductDetailPrice