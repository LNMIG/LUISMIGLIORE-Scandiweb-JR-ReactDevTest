import { Component } from 'react';
import './priceShower.css';

class PriceShower extends Component {
    constructor(props) {
        super(props);
        this.state={
            total: 1.00,
            symbol: '$'
        }
    }
    componentDidMount = () => {
        if (this.props.products && this.props.products.length > 0) {
            let cC = this.props.currentCurrency.length===0 ? [{label: "USD", symbol: "$"}] : this.props.currentCurrency
            let total = this.props.products.reduce((prev, current) => prev + (current.prices.filter(each=> each.currency.symbol===cC[0].symbol)[0].amount * current.quantity), 0)
            this.setState(state => ({...state, total: total, symbol: cC[0].symbol}))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.products !== prevProps.products || this.props.currentCurrency !== prevProps.currentCurrency) {
            let cC = this.props.currentCurrency.length===0 ? [{label: "USD", symbol: "$"}] : this.props.currentCurrency
            let total = this.props.products.reduce((prev, current) => prev + (current.prices.filter(each=> each.currency.symbol===cC[0].symbol)[0].amount * current.quantity), 0)
            this.setState(state => ({...state, total: total, symbol: cC[0].symbol}))
        }
    }

    render (){
        console.log(this.props.products)
        console.log(this.props.currentCurrency)
        return (
            <div className="justPriceWrapper">
                <div className="justTitles">
                    <span className='description'>Tax 21%:</span>
                    <span className='numbers'>$42.00</span>
                </div>
                <div className="justTitles">
                    <span className='description'>Quantity:</span>
                    <span className='numbers'>3</span>
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