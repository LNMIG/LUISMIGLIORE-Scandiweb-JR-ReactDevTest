import { Component } from "react";
import { connect } from "react-redux";
import ProductBought from "./productBought";
import Shipping from './shipping';
import PriceTaxes from '../cartComponents/priceShower';
import './checkout.css';

class MainScreener extends Component {
    render (){
         return (
            <div className="mainScreener">
                <div className="left"></div>
                <div className="right">
                    {this.props.checkoutProducts && this.props.checkoutProducts.length > 0
                    ? this.props.checkoutProducts.map((each, index) =>
                            < ProductBought
                                key={index}
                                product={each}
                            />)
                    : <div className="noproduct">There is no product to purchase</div>
                    }
                    {this.props.checkoutProducts && this.props.checkoutProducts.length > 0
                    ? <>
                        < Shipping />
                        < PriceTaxes
                            products={this.props.checkoutProducts}
                            currentCurrency={[this.props.checkoutProducts[0].prices[0].currency]}
                            typo={'checkout'}
                        />
                      </>
                    : null
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProp = (state) => {
    return {
        checkoutProducts: state.checkoutProducts,
    }
}
export default connect(mapStateToProp, null)(MainScreener)