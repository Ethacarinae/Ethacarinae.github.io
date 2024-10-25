// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import productsReducer from './reducers/productsReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

const store = createStore(rootReducer);

export default store;
