import { Component } from 'react';
import './priceShower.css';

class PriceShower extends Component {
    constructor(props) {
        super(props);
        this.state={
            taxes: 21, //in percent. variable per country or state
            tax: 0,
            total: 1.00,
            quantity: 0,
            symbol: '$'
        }
    }
    currency = () => {
        return this.props.currentCurrency.length===0 ? [{label: "USD", symbol: "$"}] : this.props.currentCurrency
    }
    total = () => {
        let total = this.props.products.reduce((prev, current) => 
            prev + (current.prices.filter(each=> 
                each.currency.symbol===this.currency()[0].symbol)[0].amount * current.quantity), 0)
        total = +(Math.round(total + "e+2") + "e-2")
        return total
    }
    tax = () => {
        return +(Math.round(this.total()*this.state.taxes/100 + "e+2") +"e-2")
    }
    quantity = () => {
        return this.props.products.reduce((prev, current) => prev + current.quantity, 0)
    }
    componentDidMount = () => {
        if (this.props.products && this.props.products.length > 0) {
            this.setState(state => ({
                ...state,
                total: this.total(),
                quantity: this.quantity(),
                symbol: this.currency()[0].symbol,
                tax: this.tax()
            }))
        }
    }
    componentDidUpdate(prevProps, _prevState) {
        if (this.props.products !== prevProps.products || this.props.currentCurrency !== prevProps.currentCurrency) {
            this.setState(state => ({
                ...state,
                total: this.total(),
                quantity: this.quantity(),
                symbol: this.currency()[0].symbol,
                tax: this.tax()
            }))
        }
    }

    render (){

        return (
            <div className="justPriceWrapper">
                <div className="justTitles">
                    <span className='description'>{`Tax ${this.state.taxes}%:`}</span>
                    <span className='numbers'>{this.state.symbol}{this.state.tax}</span>
                </div>
                <div className="justTitles">
                    <span className='description'>Quantity:</span>
                    <span className='numbers'>{this.state.quantity}</span>
                </div>
                <div className="justTitles">
                    <span className='totalamount'>Total:</span>
                    <span className='numbers'>{this.state.symbol}{this.state.total}</span>
                </div>
            </div>
        )
    }
}
export default PriceShower