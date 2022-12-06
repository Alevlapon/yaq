const initialState = {
  items: [],
  isLoaded: false,
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default categories;
