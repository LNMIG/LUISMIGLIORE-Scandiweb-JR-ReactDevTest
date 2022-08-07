import { Component } from "react";
import './selector-ItemList.css'

class ItemList extends Component {

render () {
    return (
        <ul
        ref={this.props.dropdownListRef}
        className={`dropdown_item_list ${this.props.state.isOpen ? 'active' : ""} `}
        >

        {this.props.categories.map((category, index) => {
          return (
            <li className='item_list' key={index}>
              <button type='button' value={category.name} onClick={this.props.onClick}>{category.name}</button>
            </li>
          );
        })}

        </ul>
    )
}
}
export default ItemList