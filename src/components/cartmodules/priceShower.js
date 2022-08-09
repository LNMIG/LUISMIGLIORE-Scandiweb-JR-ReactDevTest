import { Component } from 'react';
import './priceShower.css';

class PriceShower extends Component {
    render (){
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
                    <span className='numbers'>$200.00</span>
                </div>
            </div>
        )
    }
}
export default PriceShower