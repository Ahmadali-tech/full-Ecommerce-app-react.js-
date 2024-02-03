export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.shoppingCart.find((item) => item.id === action.payload.id);

      if (existingItem) {
        return state;
      }

      const updatedCartAdd = [...state.shoppingCart, action.payload];
      return {
        ...state,
        shoppingCart: updatedCartAdd,
        qty: state.qty + 1,
        totalPrice: state.totalPrice + parseFloat(action.payload.price) || 0, 
      };

    case 'INCREMENT_PRODUCT':
      const updatedCartIncrement = state.shoppingCart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );

      return {
        ...state,
        shoppingCart: updatedCartIncrement,
        qty: state.qty + 1,
        totalPrice: state.totalPrice + parseFloat(action.payload.price) || 0, 
      };

    case 'DECREMENT_PRODUCT':
      const updatedCartDecrement = state.shoppingCart.map((item) =>
        item.id === action.payload.id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      );

      return {
        ...state,
        shoppingCart: updatedCartDecrement,
        qty: state.qty - 1,
        totalPrice: state.totalPrice - parseFloat(action.payload.price) || 0, 
      };

    case 'DELETE_PRODUCT':
      const itemToDelete = state.shoppingCart.find((item) => item.id === action.payload.id);

      if (!itemToDelete) {
        return state;
      }

      const updatedCartDelete = state.shoppingCart.filter((item) => item.id !== action.payload.id);

      return {
        ...state,
        shoppingCart: updatedCartDelete,
        qty: state.qty - itemToDelete.qty,
        totalPrice: state.totalPrice - parseFloat(itemToDelete.price) || 0, 
      };

    default:
      return state;
  }
};

