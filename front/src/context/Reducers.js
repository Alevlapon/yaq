export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_SAVED":
      // const prod = state.products.find((item) => item.id === action.payload.id);

      const inSaved = state.saved?.find(
        (item) => item.product.id === action.payload.id
      )
        ? true
        : false;

      if (inSaved)
        return {
          ...state,
          saved: [...state.saved],
        };
      else
        return {
          ...state,
          saved: [
            ...state.saved,
            {
              product: action.payload,
            },
          ],
        };

    case "REMOVE_FROM_SAVED":
      return {
        ...state,
        saved: state.saved.filter((c) => c.product.id !== action.payload.id),
      };

    case "ADD_TO_CART":
      // const product = state.products?.find(
      //   (item) => item.id === action.payload.id
      // );
      // console.log(action.payload);

      const inCart = state.cart?.find(
        (item) =>
          item.product.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      )
        ? true
        : false;

      if (inCart) {
        state.cart.map((item) =>
          item.product.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
            ? (item.quantity += 0.5)
            : item.quantity
        );

        return {
          ...state,
          cart: [...state.cart],
        };
      } else
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              product: action.payload,
              color: action.payload.color,
              size: action.payload.size,
              quantity: 1,
            },
          ],
        };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (c) =>
            c.product.id !== action.payload.id ||
            c.product.color !== action.payload.color ||
            c.product.size !== action.payload.size
        ),
      };

    case "INCREMENT-QUANTITY":
      console.log(action.payload);
      state.cart.map((item) =>
        item.product.id === action.payload.id &&
        item.color === action.payload.color &&
        item.size === action.payload.size
          ? (item.quantity += 0.5)
          : item.quantity
      );

      return {
        ...state,
        cart: [...state.cart],
      };

    case "DECREMENT-QUANTITY":
      state.cart.map((item) =>
        item.product.id === action.payload.id &&
        item.color === action.payload.color &&
        item.size === action.payload.size &&
        item.quantity > 1
          ? (item.quantity -= 0.5)
          : item.quantity
      );

      return {
        ...state,
        cart: [...state.cart],
      };

    default:
      return state;
  }
};
