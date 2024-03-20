import React, { useState } from 'react';
import './ProductPage.css';
import Cart from './CartSection.jsx'; // Import the Cart component

function ProductPage({ products, addToCart }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  // Handle Add to Cart button click
  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="product-page">
      <h2>Featured Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: {product.price} ETH</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
