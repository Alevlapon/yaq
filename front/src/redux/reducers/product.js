const initialState = {
  item: {},
  isLoaded: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        ...state,
        item: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default product;
