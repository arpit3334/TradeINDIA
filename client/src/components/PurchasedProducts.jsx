import React from 'react';
import './PurchasedProduct.css';

const PurchasedProduct = ({ product }) => {
    return (
        <div className="purchased-product">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Seller: {product.seller}</p>
            <p>Delivery Status: {product.deliveryStatus}</p>
            <p>Delivery Date: {product.deliveryDate}</p>
        </div>
    );
};

export default PurchasedProduct;
