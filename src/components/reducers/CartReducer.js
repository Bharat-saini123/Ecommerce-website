const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, initialcolor, amount, product } = action.payload;
    // console.log(product);
    // takle the existing product

    let existingproduct = state.cart.find((currentElement) => {
      return (currentElement.id === id + initialcolor);
    });
    // console.log(existingproduct)
    if (existingproduct) {
      let latestProduct = state.cart.map((currentElement) => {
        if (currentElement.id === id + initialcolor) {
          let newAmount = currentElement.amount + amount;

          if(newAmount>=currentElement.max){
            newAmount=currentElement.max;

          }
          return {
            ...currentElement,
            amount: newAmount,
          };
        } else {
          return currentElement;
        }
      });
      return {
        ...state,
        cart: latestProduct,
      };
    } else {
      let cartProducts;
      cartProducts = {
        id: id + initialcolor,
        amount,
        initialcolor,
        price: product.price,
        image: product.image[0].url,
        name: product.name,
        max: product.stock,
      };

      return { ...state, cart: [...state.cart, cartProducts] };
    }
  }

  if (action.type === "REMOVE_CART_ITEM") {
    let upDateProduct = state.cart.filter((currentElement) => {
      return currentElement.id !== action.payload;
    });

    return {
      ...state,
      cart: upDateProduct,
    };
  }

  if (action.type === "CLEAR_ALL_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default CartReducer;
