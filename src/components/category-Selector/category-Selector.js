import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAllCategories from '../../redux/actions/getAllCategories.js';
import getProductsByCategory from '../../redux/actions/getProductsByCategory.js';
import postCurrentCategory from '../../redux/actions/postCurrentCategory';
import postSelectedProductsByCategory from '../../redux/actions/postSelectedProductsByCategory.js';
import Button from './selector-Button';
import ItemList from './selector-ItemList';
import './category-Selector.css';

class CategorySelector extends Component {

    constructor (props) {
        super(props)
        this.state = {
            isOpen: false,
            currentCategory: 'all',
            }
        this.activatorRef = React.createRef(null)
        this.dropdownListRef = React.createRef(null)
        this.vector =''
        this.filteredProducts= []
    }
  
    onClickHandler = () => {
      this.setState(prevState => ({...prevState, isOpen: !this.state.isOpen}));
    }
  
    keyHandler = (event) => {
      if (event.key === "Escape" && this.state.isOpen) {
        this.setState(prevState => ({...prevState, isOpen: false}));
        }
    }
  
    clickOutsideHandler = (event) => {
        if (this.dropdownListRef.current) {
          if (this.dropdownListRef.current.contains(event.target) || this.activatorRef.current.contains(event.target)) {
          return;
          }
          this.setState(prevState => ({...prevState, isOpen: false}));
          }
    }

    onClickButton = (selectedCategory) => {
        this.setState(prevState => ({...prevState, currentCategory: selectedCategory.target.value }))
        this.setState(prevState => ({...prevState, isOpen: !this.state.isOpen}));
        this.props.postCurrentCategory(selectedCategory.target.value)

        if (this.filteredProducts.length === 0 ) {
          this.filteredProducts = this.props.productsByCategory
        }
    }

    componentDidMount() {
        this.props.getAllCategories();
        this.props.getProductsByCategory(JSON.parse(sessionStorage.getItem('postedCurrentCategory'))?.currentCategory || this.state.currentCategory);
        
        if (JSON.parse(sessionStorage.getItem('postedCurrentCategory'))){
          this.setState(prevState => ({...prevState, currentCategory: JSON.parse(sessionStorage.getItem('postedCurrentCategory')).currentCategory}))
        }
    }

    componentDidUpdate(prevProps, prevState, _snapshot) {
        if (this.state.currentCategory !== prevState.currentCategory) {
            this.props.getProductsByCategory(this.state.currentCategory.toLowerCase());
            this.selectedProductsByCategory = []
            let allCategories = this.props.allCategories.length > 0 ? this.props.allCategories : JSON.parse(sessionStorage.getItem('allCategories'))
            if (this.state.currentCategory === allCategories[0].name) {
            // if (this.state.currentCategory === this.props.allCategories[0].name) {
              this.selectedProductsByCategory = this.filteredProducts
              } else {
              this.selectedProductsByCategory = this.filteredProducts.filter(each => each.category === this.state.currentCategory)
              }
            this.props.postSelectedProductsByCategory(this.selectedProductsByCategory);
            }

        if(this.state.isOpen !== prevState.isOpen) {
          this.dropdownListRef.current.querySelector("button").focus();
          document.addEventListener("mousedown", this.clickOutsideHandler);
          } else {
          document.addEventListener("mousedown", this.clickOutsideHandler);
          }
        if(this.props.postedCurrentCategory !== prevProps.postedCurrentCategory) {
          this.setState(prevState => ({...prevState, currentCategory: this.props.postedCurrentCategory.currentCategory}));
          }
    }

    render () {

        const categories = this.props.allCategories || JSON.parse(sessionStorage.getItem('allCategories'))

        return (
          <div className='dropdown_wrapper' onKeyUp={this.keyHandler}>
            <Button state={this.state} onClick={this.onClickHandler} refference={this.activatorRef} vector={this.vector}/>
            {categories && categories.length > 0
            ? < ItemList dropdownListRef={this.dropdownListRef} state={this.state} categories={categories} onClick={this.onClickButton}/>
            : <div>Loading categories...</div>
            }
          </div>
        )
    };
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
    getProductsByCategory: (categoryType) => dispatch(getProductsByCategory(categoryType)),
    postCurrentCategory: (selectedCategory) => dispatch(postCurrentCategory(selectedCategory)),
    postSelectedProductsByCategory: (selectionMade) => dispatch(postSelectedProductsByCategory(selectionMade)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelector);