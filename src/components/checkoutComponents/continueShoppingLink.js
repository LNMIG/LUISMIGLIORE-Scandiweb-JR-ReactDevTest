import { Component } from "react"
import { Link } from "react-router-dom"
import './continueShoppingLink.css'

class ContinueShopping extends Component {
    render () {
        return (
            <div className="continueShoppingContainer">
                <Link className="continueShopping" to={'/productslist'}>Continue shopping </Link>
            </div>
        )
    }
}
export default ContinueShopping
