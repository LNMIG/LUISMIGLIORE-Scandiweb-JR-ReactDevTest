import { Component } from "react";
import './product-DetailAttribute.css'

class ProductDetailAttribute extends Component {

    // constructor (props) {
    //     super(props);
    //     this.state={};
    // }
    
    // onClick = (selected) => {
    //     let stated = []
    //     for (let i=0; i<this.props.productDetails.attributes.length; i++) {
    //         stated.push(this.state[i])
    //     }
    //     stated.splice(selected.target.id, 1, {[selected.target.name] : selected.target.value})
    //     this.setState((state) => ({...state, ...stated}))
    // }

    // componentDidMount () {
    //     if(this.props.productDetails.attributes.length !== 0) {
    //         let stated = []
    //         for (let i=0; i<this.props.productDetails.attributes.length; i++) {
    //             stated.push({[this.props.productDetails.attributes[i].id] : this.props.productDetails.attributes[i].items[0].value})
    //         }
    //         this.setState((state) => ({...state, ...stated}))
    //     }
    // }

    // componentDidUpdate (prevProps, _prevState) {
    //     if(this.props.productDetails.id !== prevProps.productDetails.id) {
    //         this.setState({})
    //         let stated = []
    //         for (let i=0; i<this.props.productDetails.attributes.length; i++) {
    //             stated.push({[this.props.productDetails.attributes[i].id] : this.props.productDetails.attributes[i].items[0].value})
    //         }
    //         this.setState((state) => ({...state, ...stated}))
    //     }
    // }

    render () {
        
        if (Object.entries(this.props.state).length === 0) {
            return <h2>Loading...</h2>
        }

        const returnClassName = (state, itemValue, attributeType) => { 
            if (attributeType.toLowerCase() === 'text') return Object.values(state).toString() === itemValue ? 'textSelected' : attributeType
            if (attributeType.toLowerCase() === 'swatch') return Object.values(state).toString() === itemValue ? 'swatchSelected' : attributeType
        }
        const returnStyle = (itemValue) => {
            if (itemValue.charAt(0) === '#') return { background: itemValue}
        }
        const returnName = (attributeName) => {
            if (attributeName.charAt(0) !== '#') return attributeName
        }

        return (
            <div className="productDetailAttributeContainer">
                {this.props.attributes && this.props.attributes.length>0 ?
                    this.props.attributes.map((attribute, indexA) => {return (
                        <div className="attributeWraper" key={indexA}>
                            <div className="attributeId" >{attribute.name}:</div>
                            <div className="attributeItems">
                                {attribute.items && attribute.items.length > 0 ?
                                    attribute.items.map((item, indexB) => {return (
        
                                        <button
                                            id={indexA}
                                            key={`${item.id}${indexB}`}
                                            className={ returnClassName(this.props.state[indexA], item.value, attribute.type) }
                                            style={ returnStyle(item.value) }
                                            name={attribute.name}
                                            value={item.value}
                                            onClick={this.props.onClick}
                                        >
                                            {returnName(item.value)}
                                        </button>
        
                                    )})
                                :
                                null
                                }
                            </div>
                        </div>
                    )})
                :
                null
                }
            </div>
        )
    }
}
export default ProductDetailAttribute;
