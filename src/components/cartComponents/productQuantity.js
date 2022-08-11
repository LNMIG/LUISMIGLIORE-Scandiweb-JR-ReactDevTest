import { Component } from 'react';
import { connect } from 'react-redux';
import putNewProductAttributes from '../../redux/actions/putNewProductAttributes'
import './productQuantity.css';

class ProductQuantityWrapper extends Component {

    constructor(props) {
        super(props);
        this.state={
            quantity: 1,
            remove: false,
        }
    }
    onClickSquare = (selected) => {
        selected.target.name=== 'minus'
        ? this.setState(state => ({...state, quantity: this.state.quantity - 1}))
        : this.setState(state => ({...state, quantity: this.state.quantity + 1}))
    }
    onClickRemove = (selected) => {
        selected.target.name=== 'NO'
        ? this.setState(state => ({...state, quantity: this.state.quantity + 1, remove: false}))
        : console.log('') //: this.props.removeProductFromCart(product.idForDeletion)
    }

    componentDidMount(){
        if (this.props.quantity && this.props.quantity !== 0) {
            this.setState(state => ({...state, quantity: this.props.quantity}))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.state.quantity !== prevState.quantity) {
            if(this.state.quantity>0) {
                this.props.putNewProductAttributes(this.props.postedProductsToCart, this.props.idForDeletion, {quantity: this.state.quantity})
            } else {
                this.setState(state => ({...state, remove: true}))
            }
        }
    }

    render (){
        return (
            <div className='productQuantityWrapper'>
                <button name='plus'className='square' onClick={this.onClickSquare}>
                    +
                </button>
                <span className='productQuantity'>
                    {this.state.quantity}
                </span>
                <button name='minus' className='square' onClick={this.onClickSquare}>
                    -
                </button>
                <span name='remove' className={this.state.remove? 'remove' : 'keep'}>
                    <p>Do you really want to remove this product from your bag?</p>
                    <div className='buttonsContainer'>
                        <button name='YES'className='buttons' onClick={this.onClickRemove}>YES</button>
                        <button name='NO' className='buttons' onClick={this.onClickRemove}>NO</button>
                    </div>
                </span>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        postedProductsToCart: state.postedProductsToCart,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        putNewProductAttributes: (pack, id, attribute) => dispatch(putNewProductAttributes(pack, id, attribute))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductQuantityWrapper)