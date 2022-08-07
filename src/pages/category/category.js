import React, { Component } from 'react';
import CategorySelector from '../../components/category-Selector/category-Selector';
import Pagination from '../../components/pagination/pagination';
import ProductCard from '../../components/product-Card/product-Card';
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
            </div>
        );
    };
};

export default Category;