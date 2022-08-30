import { Component } from "react";
import './header-NavCategoryList.css'

class CategoryList extends Component {

render () {
    return (
        <ul
        ref={this.props.dropdownListRef}
        className={`${this.props.state ? 'categoryItemList' : ""} `}
        >

        {this.props.categories.map((category, index) => {
          return (
            <li className='categoryList' key={index}>
              <button
                id={this.props.idEach}
                type='button'
                value={category.name}
                onClick={this.props.onClick}
              >
                {category.name}
              </button>
            </li>
          );
        })}

        </ul>
    )
}
}
export default CategoryList