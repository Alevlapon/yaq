const initialState = {
  item: {},
};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BASKET":
      return {
        ...state,
        item: action.payload,
      };

    case "INC_PRODUCT":
      return {
        ...state,
        item: {
          ...state.item,
          amount: state.item.amount + action.payload.price,
          basket_products: state.item.basket_products.map((el) =>
            el.productId === action.payload.id &&
            el.productSize === action.payload.size
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        },
      };

    case "DEC_PRODUCT":
      return {
        ...state,
        item: {
          ...state.item,
          amount: state.item.amount - action.payload.price,
          basket_products: state.item.basket_products.map((el) =>
            el.productId === action.payload.id &&
            el.productSize === action.payload.size &&
            el.quantity !== 1
              ? { ...el, quantity: el.quantity - 1 }
              : el
          ),
        },
      };

    case "DEL_PRODUCT":
      return {
        ...state,
        item: {
          ...state.item,
          amount:
            state.item.amount - action.payload.price * action.payload.quantity,
          basket_products: state.item.basket_products.filter(
            (el) =>
              el.productId !== action.payload.id ||
              el.productSize !== action.payload.size
          ),
        },
      };

    default:
      return state;
  }
};

export default basket;
