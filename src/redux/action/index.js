// add item to cart
export const addCart = (product) => {
  return {
    type: "ADDCART",
    payload: product,
  };
};
