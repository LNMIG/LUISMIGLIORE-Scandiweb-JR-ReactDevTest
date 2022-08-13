import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategorySelector from '../../components/category-Selector/category-Selector';
import Pagination from '../../components/pagination/pagination';
import ProductCard from '../../components/product-Card/product-Card';
import Blocker from '../../components/blocker/blocker.js';
import './category.css'

export class Category extends Component {
    
    render() {
        return (
            <div className="mainContainer">
                <CategorySelector />
                <Pagination />
                <div className='productsContainer'>
                    <ProductCard />
                </div>
                { this.props.blocker ? < Blocker/> : null }
            </div>
        );
    };
};
const mapStateToProps = (state) => {
    return {
        blocker: state.blocker,
    }
}
export default connect(mapStateToProps, null)(Category)