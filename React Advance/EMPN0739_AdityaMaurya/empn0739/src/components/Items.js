import React from 'react';
import p1 from '../images/products/product-1.png';
import cart from '../images/common/add-to-cart.png';
import './Items.css'; // Import your styles here


// EMPN0739 Aditya Maurya
function Items() {
  return (
    <div className="item-container">
      {/* Image Section */}
      <div className="item-image">
        <img src={p1} alt="Ear plugs" />
      </div>

      {/* Details Section */}
      <div className="item-details">
        <div className="item-name">High-Fidelity Noise-Canceling Ear Plugs</div>
        <div className="item-description">
          Immerse yourself in pure audio bliss with our high-fidelity noise-canceling earplugs.
          Perfect for music lovers, frequent travelers, or anyone seeking tranquility in a loud world.
        </div>
        <div className="item-price">$30.99</div>
      </div>

      {/* Actions Section */}
      <div className="item-actions">
        {/* Quantity Section */}
        <div className="quantity-section">
          <div>QTY</div>
          <select name="quantity" id="product-quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Add to Cart Button */}
        <button id="add-to-cart">
          <img src={cart} alt="Add to Cart" />
        </button>
      </div>
    </div>
  );
}

export default Items;
