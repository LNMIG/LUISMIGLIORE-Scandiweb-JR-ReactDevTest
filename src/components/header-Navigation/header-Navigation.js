import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { NavLink } from 'react-router-dom';
//import CategoryList from './header-NavCategoryList.js';
import getAllCategories from '../../redux/actions/getAllCategories.js';
import getProductsByCategory from '../../redux/actions/getProductsByCategory.js';
import postCurrentCategory from '../../redux/actions/postCurrentCategory.js';
//import postSelectedProductsByCategory from '../../redux/actions/postSelectedProductsByCategory.js';
import './header-Navigation.css';
import NavigationButton from './header-NavButton.js';

export class HeaderNavigation extends Component {

    constructor (props) {
        super(props);
        this.state ={
            buttonSelected:
                JSON.parse(sessionStorage.getItem('navButSelected'))
                ? JSON.parse(sessionStorage.getItem('navButSelected'))
                : '1',
            categorySelected: '',
            isOpen: false,
            buttonName: '',
        }
        this.activatorRef = React.createRef(null)
        this.dropdownListRef = React.createRef(null)
        this.filteredProducts= []
    }

    keyHandler = (event) => {
        if ( 
            (event.key === "Escape"
            || event.key === "NumpadEnter"
            || event.key === "Enter"
            || event.key === "Space"
            )
            && this.state.isOpen) {
          this.setState(prevState => ({...prevState, isOpen: false}));
        }
    }

    onClickHandler = (buttonSelected) => {
        if (!this.state.isOpen) {
            this.setState(prevState => ({...prevState,
                isOpen: !this.state.isOpen,
                buttonName: buttonSelected.target.name,
            }))
        }

        if (buttonSelected.target.name === this.state.buttonName) {
            this.setState(prevState => ({...prevState,
                isOpen: !this.state.isOpen,
                buttonName: '',
            }))
        } else {
            this.setState(prevState => ({...prevState,
                buttonName: buttonSelected.target.name,
            }))
        }
    }

    clickOutsideHandler = (event) => {
        if (event.target.title !== 'navigation') {
            if (this.dropdownListRef.current) {
              if (this.dropdownListRef.current.contains(event.target) || this.activatorRef.current.contains(event.target)) {
              return;
              }
              this.setState(prevState => ({...prevState, isOpen: false, buttonName: '',}));
            }
        }
    }

    onClickButton = (selectedCategory) => {
        this.setState(prevState => ({...prevState,categorySelected: selectedCategory.target.value }))
        this.setState(prevState => ({...prevState, isOpen: !this.state.isOpen, buttonName: ''}));
        this.setState(prevState => ({...prevState, buttonSelected: selectedCategory.target.id }))
        this.props.postCurrentCategory(selectedCategory.target.value)
        
        sessionStorage.setItem('navButSelected', JSON.stringify(selectedCategory.target.id))
    }

    componentDidMount() {
        this.props.getAllCategories();
        this.props.getProductsByCategory(
            this.state.categorySelected 
            || JSON.parse(sessionStorage.getItem('postedCurrentCategory'))?.currentCategory
            );
        if (!this.state.categorySelected
            && !JSON.parse(sessionStorage.getItem('postedCurrentCategory'))
            ) this.props.postCurrentCategory('all')
    }

    componentDidUpdate(_prevProps,prevState) {
        if (this.state.categorySelected !== prevState.categorySelected) {
            this.props.getProductsByCategory(this.state.categorySelected);
        }
 
        if(this.state.isOpen !== prevState.isOpen && this.dropdownListRef.current) {
            this.dropdownListRef.current.querySelector("button").focus();
            document.addEventListener("mousedown", this.clickOutsideHandler);
            } else {
            document.addEventListener("mousedown", this.clickOutsideHandler);
          }
    }

    render() {

        let buttonSelected = this.state.buttonSelected
        const categories = this.props.allCategories

        return (
            <div className='headerNavigationContainer'>
                {/* <NavLink exact to='/productslist' className='navlink'> */}
                <NavigationButton
                        id={'1'}
                        name={'women'}
                        title={'navigation'}
                        placeholder={'WOMEN'}
                        buttonSelected={buttonSelected}
                        categories={categories}
                        isOpen={this.state.isOpen}
                        buttonName={this.state.buttonName}
                        activRefference={this.activatorRef}
                        listRefference={this.dropdownListRef}
                        onKeyUp={this.keyHandler}
                        onClickMain={this.onClickHandler}
                        onClickList={this.onClickButton}
                        allCategories={this.props.allCategories}
                    />

                    {/* <div 
                        className={buttonSelected === '1' ? 'headerNavigationClass1' : 'headerNavigationClass2'}
                        onKeyUp={this.keyHandler}
                    >
                    <button
                        id='1'
                        name='women'
                        type='button'
                        title='navigation'
                        className={buttonSelected === '1' ? 'buttonUp' : 'buttonDown'}
                        onClick={(e)=>this.onClickHandler(e)}
                        ref={this.activatorRef}
                    >
                        WOMEN
                    </button>

                    {this.state.isOpen && this.state.buttonName === 'women'
                    ? <div className='showCategoryList'>
                        {categories && categories.length > 0
                        ? <CategoryList
                            idEach='1'
                            state={this.state.isOpen}
                            categories={this.props.allCategories}
                            onClick={this.onClickButton}
                            dropdownListRef={this.dropdownListRef}
                          />
                        :
                        <div>Loading...</div>
                        }
                      </div>
                    :
                    ''
                    }
                    </div> */}
                {/* </NavLink> */}

                {/* <NavLink exact to='/productslist' className='navlink'> */}
                <NavigationButton
                        id={'2'}
                        name={'men'}
                        title={'navigation'}
                        placeholder={'MEN'}
                        buttonSelected={buttonSelected}
                        categories={categories}
                        isOpen={this.state.isOpen}
                        buttonName={this.state.buttonName}
                        activRefference={this.activatorRef}
                        listRefference={this.dropdownListRef}
                        onKeyUp={this.keyHandler}
                        onClickMain={this.onClickHandler}
                        onClickList={this.onClickButton}
                        allCategories={this.props.allCategories}
                    />

                    {/* <div
                        className={buttonSelected === '2' ? 'headerNavigationClass1' : 'headerNavigationClass2'}
                        onKeyUp={this.keyHandler}
                    >
                    <button
                        id='2'
                        name='men'
                        type='button'
                        title='navigation'
                        className={buttonSelected === '2' ? 'buttonUp' : 'buttonDown'}
                        onClick={(e)=>this.onClickHandler(e)}
                        ref={this.activatorRef}
                    >
                        MEN
                    </button>

                    {this.state.isOpen && this.state.buttonName === 'men'
                    ? <div className='showCategoryList'>
                        {categories && categories.length > 0
                        ? <CategoryList
                            idEach='2'
                            state={this.state.isOpen}
                            categories={this.props.allCategories}
                            onClick={this.onClickButton}
                            dropdownListRef={this.dropdownListRef}
                          />
                        :
                        <div>Loading...</div>
                        }
                      </div>
                    :
                    ''
                    }
                    </div> */}
                {/* </NavLink> */}

                {/* <NavLink exact to='/productslist' className='navlink'> */}
                    <NavigationButton
                        id={'3'}
                        name={'kids'}
                        title={'navigation'}
                        placeholder={'KIDS'}
                        buttonSelected={buttonSelected}
                        categories={categories}
                        isOpen={this.state.isOpen}
                        buttonName={this.state.buttonName}
                        activRefference={this.activatorRef}
                        listRefference={this.dropdownListRef}
                        onKeyUp={this.keyHandler}
                        onClickMain={this.onClickHandler}
                        onClickList={this.onClickButton}
                        allCategories={this.props.allCategories}
                    />

                    {/* <div
                        className={buttonSelected === '3' ? 'headerNavigationClass1' : 'headerNavigationClass2'}
                        onKeyUp={this.keyHandler}
                    >
                    <button
                        id='3'
                        name='kids'
                        type='button'
                        title='navigation'
                        className={buttonSelected === '3' ? 'buttonUp' : 'buttonDown'}
                        onClick={(e)=>this.onClickHandler(e)}
                        ref={this.activatorRef}
                    >
                        KIDS
                    </button>

                    {this.state.isOpen && this.state.buttonName === 'kids'
                    ? <div className='showCategoryList'>
                        {categories && categories.length > 0
                        ? <CategoryList
                            idEach='3'
                            state={this.state.isOpen}
                            categories={this.props.allCategories}
                            onClick={this.onClickButton}
                            dropdownListRef={this.dropdownListRef}
                          />
                        :
                        <div>Loading...</div>
                        }
                      </div>
                    :
                    ''
                    }
                    </div> */}
                {/* </NavLink> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        allCategories: state.allCategories,
        productsByCategory: state.productsByCategory,
        postedCurrentCategory: state.postedCurrentCategory,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllCategories: () => dispatch(getAllCategories()),
        getProductsByCategory: (categorySelected) => dispatch(getProductsByCategory(categorySelected)),
        postCurrentCategory: (selectedCategory) => dispatch(postCurrentCategory(selectedCategory)),
        // postSelectedProductsByCategory: (selectionMade) => dispatch(postSelectedProductsByCategory(selectionMade)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavigation);