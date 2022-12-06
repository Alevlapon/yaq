const initialState = {
  items: [],
};

const brands = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BRANDS":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default brands;
