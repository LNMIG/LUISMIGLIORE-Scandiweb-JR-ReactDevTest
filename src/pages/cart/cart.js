import { Component } from "react";
import MainCart from "../../components/cartmodules/cartMain";
import './cart.css'
class Cart extends Component {
    render (){
        return (
            <div className="mainCartContainer">
                <MainCart />
            </div>
            
        )
    }
}

export default Cart