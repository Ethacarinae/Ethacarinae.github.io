// src/redux/reducers/cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Lógica para añadir al carrito
      return {
        ...state,
        items: [...state.items, action.payload],
        totalAmount: state.totalAmount + action.payload.price,
      };
    case REMOVE_FROM_CART:
      // Lógica para eliminar del carrito
      return state;
    default:
      return state;
  }
};

export default cartReducer;
