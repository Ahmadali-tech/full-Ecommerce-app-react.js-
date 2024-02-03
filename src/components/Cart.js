import React, { useContext } from 'react';
import { CartContext } from './Cartcontext';
const handleClick=()=>{
  

}

const calculateProductTotal = (price, qty) => {
  const numericPrice = parseFloat(price);
  const numericQty = parseInt(qty);

  if (!isNaN(numericPrice) && !isNaN(numericQty)) {
    const total = numericPrice * numericQty;
    return !isNaN(total) ? total.toFixed(2) : "0.00";
  }
  return "0.00";
};

const CartItem = ({ cart, handleIncrement, handleDecrement, handleDelete }) => (
  <div className="cart-item" key={cart.id}>
    <div className="cart">
      <div className="cart-image">
        <img src={cart.image} alt={cart.name} />
      </div>
      <div className="cart-product-details">
        <div className="cart-product-description">{cart.description}</div>
        <span className="cart-product-name">{cart.name}</span>
        <span className="cart-product-price">${cart.price}</span>
        <div className="quantity-controls">
          <span className="decrement" onClick={() => handleDecrement(cart.id)}>
            <i className="fas fa-minus"></i>
          </span>
          <span className="product-quantity">{cart.id}</span>
          <span className="increment" onClick={() => handleIncrement(cart.id)}>
            <i className="fas fa-plus"></i>
          </span>
        </div>
        <span className="product-total-price">${calculateProductTotal(cart.price, cart.id)}</span>
        <span className="delete-product" onClick={() => handleDelete(cart.id)}>
          <i className="fas fa-trash-alt"></i>
        </span>
      </div>
    </div>
  </div>
);

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  const handleIncrement = (productId) => {
    const itemIndex = state.shoppingCart.findIndex((item) => item.id === productId);

    if (itemIndex !== 1) {
      const updatedCart = [...state.shoppingCart];
      updatedCart[itemIndex].qty += 1;
      dispatch({ type: 'UPDATE_CART', payload: updatedCart });
    }
  };

  const handleDecrement = (productId) => {
    const existingProduct = state.shoppingCart.find((item) => item.id === productId);

    if (existingProduct && existingProduct.qty > 1) {
      dispatch({ type: 'DECREMENT_PRODUCT', payload: { id: productId } });
    } else {
      console.warn("Cannot decrement quantity below 1.");
    }
  };

  const handleDelete = (productId) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: { id: productId } });
  };

  const calculateTotalQuantity = () => {
    return state.shoppingCart.reduce((totalQty, cart) => totalQty + cart.id, 0);
  };

  const calculateTotalPrice = () => {
    const totalPrice = state.shoppingCart.reduce(
      (total, cart) => total + parseFloat(cart.price) * cart.id,
      0
    );

    return !isNaN(totalPrice) ? totalPrice.toFixed(2) : "0.00";
  };

  return (
    <div className="container">
      <div className="cart-container" style={{ marginTop: '5%' }}>
        {state.shoppingCart.length > 0 ? (
          state.shoppingCart.map((cart) => (
            <CartItem
              key={cart.id}
              cart={cart}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="cart-summary">
          <div className="summary-header">Cart Summary</div>
          <hr />
          <p>Total Quantity: {calculateTotalQuantity()}</p>
          <p>Total Price: ${calculateTotalPrice()}</p>
         
        </div>
        <div className="stripe-checkout">
  <div className="check-out">
    <button onClick={handleClick}>CHECKOUT</button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Cart;
