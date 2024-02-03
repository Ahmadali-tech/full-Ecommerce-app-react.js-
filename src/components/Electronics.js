import React, { useState, useContext } from 'react';
import { CartContext } from './Cartcontext';
import watch1 from './../Assests/watch.jpg';
import ring from './../Assests/ring.jpg';
import iphone14 from './../Assests/iphone13.jpg';
import iphone13 from './../Assests/iphone14.jpg';
import iphone from './../Assests/iphone.jpg';
const Electronics = () => {
  const { state, dispatch } = useContext(CartContext);
  const qty = state.shoppingCart.length;
  const [selectedImage, setSelectedImage] = useState(watch1);
  const [quantity, setQuantity] = useState(2);

  const images = [watch1, ring,iphone14,iphone,iphone13];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    const newItem = {
      id: Date.now(), 
      name: 'Classic Watch', 
      price: 99.99, 
      quantity: quantity,
      image: selectedImage,
    };

    
    dispatch({ type: 'ADD_TO_CART', payload: newItem });
    setQuantity(1);
  };

  return (
    <div className="electronics-container">
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Watch ${index + 1}`}
            className={selectedImage === image ? 'selected' : ''}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className="product-details">
        <img src={selectedImage} alt="Selected Watch" className="selected-image" />
        <div className="details">
          <h2>Classic Watch</h2>
          <p className="price">$69.99</p>
          <p className="reviews">Rating: ★★★☆☆ (3/5)</p>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          />
          <button onClick={handleAddToCart}>Add to Cart</button>
          <span className="cart-count">{qty}</span>
        </div>
      </div>
    </div>
  );
}

export default Electronics;

