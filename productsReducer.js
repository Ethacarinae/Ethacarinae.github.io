// src/redux/reducers/productsReducer.js
const initialState = {
    products: [],
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      // Lógica para manejar acciones de productos si es necesario
      default:
        return state;
    }
  };
  
  export default productsReducer;
  