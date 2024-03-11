import {configureStore} from '@reduxjs/toolkit'
 
// EMPN0739 Aditya Maurya
const initialState = {
  products: [],
  allProducts: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
 
    case 'REMOVE':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
 
    default:
      return state;
  }
};
 
const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
 
export default store;