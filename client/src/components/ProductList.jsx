import React from 'react';
import ProductPage from './ProductPage';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            <h2>Products</h2>
            {products.map((product, index) => (
                <ProductPage key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
