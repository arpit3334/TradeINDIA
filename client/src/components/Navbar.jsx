import React, { useState } from "react";
import "./Navbar.css";
import { IoIosCart } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";

function Navbar({ onAddProduct, walletAddress, balance, toggleCart }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    productType: "",
    productFeatures: "",
    gstin: "",
    quantity: "",
    productImage: "", // Added productImage field
  });

  const handleAddProductClick = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    // Validate form data
    if (!formData.productName || !formData.productType || !formData.quantity) {
      alert("Please fill in all required fields.");
      return;
    }

    // Trigger the parent component function to add the product
    onAddProduct(formData);

    // Reset form data
    setFormData({
      productName: "",
      productType: "",
      productFeatures: "",
      gstin: "",
      quantity: "",
      productImage: "", // Reset product image field
    });

    // Close the form modal
    setShowForm(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <strong>TradeINDIA</strong>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>
      <div className="user-info">
        {walletAddress && (
          <span className="wallet-address">Wallet Address: {walletAddress}</span>
        )}
        <div className="cart" onClick={toggleCart}>
          <span>
            <IoIosCart size={'1.5em'}/>
          </span>
          <span className="cart-count"></span>
        </div>
        <div className="cart">
          <span>
            <RiCustomerService2Fill size={'1.5em'}/>
          </span>
        </div>
        <button className="add-product-btn" onClick={handleAddProductClick}>
          Add Product
        </button>
      </div>
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleFormClose}>
              &times;
            </span>
            <h2>Add Product</h2>
            <form>
              <div className="form-group">
                <label htmlFor="productName">Product Name:</label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="productType">Product Type:</label>
                <select
                  id="productType"
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                >
                  <option value="">Select Type</option>
                  <option value="electronic">Electronic</option>
                  <option value="clothing">Clothing</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="productFeatures">Product Features:</label>
                <textarea
                  id="productFeatures"
                  name="productFeatures"
                  value={formData.productFeatures}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="gstin">GSTIN Number:</label>
                <input
                  type="text"
                  id="gstin"
                  name="gstin"
                  value={formData.gstin}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="productImage">Product Image URL:</label> {/* New field for product image */}
                <input
                  type="text"
                  id="productImage"
                  name="productImage"
                  value={formData.productImage}
                  onChange={handleChange}
                />
              </div>
              <button type="button" onClick={handleAddProduct}>
                Add Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
