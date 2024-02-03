import React, { createContext, useReducer } from 'react';
import { CartReducer } from './CartReducer';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const initialState = {
    shoppingCart: [],
    totalPrice: 0,
    qty: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);


  console.log('CartContextProvider State:', state);

  const contextValue = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
