import { Component } from "react"
import { connect } from 'react-redux';
import './cart-Counter.css'

export class ItemCounter extends Component {

    constructor(props) {
        super(props);
        this.state={counter: 0}
    }
    
    componentDidUpdate (prevProps, prevState) {
        if(this.props.postedProductsToCart !== prevProps.postedProductsToCart) {
            let quantity = this.props.postedProductsToCart.reduce((prev, current) => prev + current.quantity, 0)
            this.setState({counter: quantity})
        }
    }

    render () {
        return (
            <div className='counterWrapper'>
                {this.state.counter}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        postedProductsToCart: state.postedProductsToCart,
    };
}
export default connect(mapStateToProps, null)(ItemCounter);
