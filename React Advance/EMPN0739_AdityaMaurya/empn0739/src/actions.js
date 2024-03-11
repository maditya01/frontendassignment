// Takes an object as an argument and return an object with two properties
// EMPN0739 Aditya Maurya
export const addProductToCart = product => ({
  type: 'ADD',
  payload: product,
});

export const removeProductFromCart = id => ({
  type: 'REMOVE',
  payload: id,
});