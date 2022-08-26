import { connect } from 'react-redux';
import React, { Component } from 'react';
import CategorySelector from '../../components/category-Selector/category-Selector';
import Pagination from '../../components/pagination/pagination';
import ProductCard from '../../components/product-Card/product-Card';
import Blocker from '../../components/blocker/blocker.js';
import HeaderDesktop from '../../components/header-Desktop/header-Desktop';
import './productList.css'

export class Category extends Component {
    
    render() {
        return (
            <>
            < HeaderDesktop />
            <div className="mainContainer">
                <CategorySelector />
                <Pagination />
                <div className='productsContainer'>
                    <ProductCard />
                </div>
                { this.props.blocker ? < Blocker/> : null }
            </div>
            </>
        );
    };
};
const mapStateToProps = (state) => {
    return {
        blocker: state.blocker,
    }
}
export default connect(mapStateToProps, null)(Category)