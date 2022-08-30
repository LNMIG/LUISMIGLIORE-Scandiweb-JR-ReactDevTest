import { Component } from "react";
import CategoryList from "./header-NavCategoryList";
import './header-Navigation.css';

class NavigationButton extends Component {

render () {
    return (
        <div
        className={this.props.buttonSelected === this.props.id ? 'headerNavigationClass1' : 'headerNavigationClass2'}
        onKeyUp={this.props.onKeyUp}
        >
            <button
                id={this.props.id}
                name={this.props.name}
                type='button'
                title={this.props.title}
                className={this.props.buttonSelected === this.props.id ? 'buttonUp' : 'buttonDown'}
                onClick={(e)=>this.props.onClickMain(e)}
                ref={this.props.activRefference}
            >
                {this.props.placeholder}
            </button>

            {this.props.isOpen && this.props.buttonName === this.props.name
            ? <div className='showCategoryList'>
                {this.props.categories && this.props.categories.length > 0
                ? <CategoryList
                    idEach={this.props.id}
                    state={this.props.isOpen}
                    categories={this.props.allCategories}
                    onClick={this.props.onClickList}
                    dropdownListRef={this.props.listRefference}
                  />
                :
                <div>Loading...</div>
                }
              </div>
            :
            ''
            }
        </div>
    );
}
}
export default NavigationButton