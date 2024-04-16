export const addItemToCart = (cartItem, product) => {
   const productInCart = cartItem.find((item) => item.id === product.id);
   if (productInCart) {
      return cartItem.map((item) =>
         item.id === productInCart.id
            ? {...item, quantity: item.quantity + 1}
            : item
      );
   }
   return [...cartItem, {...product, quantity: 1}];
};

export const removeItemFromCart = (cartItem, id) => {
   const productToRemove = cartItem.find((item) => item.id === id);
   if (productToRemove.quantity > 1) {
      return cartItem.map((item) =>
         item.id === productToRemove.id
            ? {...item, quantity: item.quantity - 1}
            : item
      );
   }
   return cartItem.filter((item) => item.id !== productToRemove.id);
};

export const clearItemFromCart = (cartItem, id) => {
   return cartItem.filter((item) => item.id !== id);
};
export const resetShippingCart = (cartItems, shippingCost) => {
   if (cartItems.length === 1 && cartItems[0].quantity === 1) {
      return 0;
   }
   return shippingCost;
};
