import { Component } from "react";
import MainCart from "../../components/cartMainModule/cartMain";
import HeaderDesktop from '../../components/header-Desktop/header-Desktop';
import './cart.css'
class Cart extends Component {
    render (){
        return (
            <>
                < HeaderDesktop />
                <div className="mainCartContainer">
                    <MainCart />
                </div>
            </>
        )
    }
}
export default Cart