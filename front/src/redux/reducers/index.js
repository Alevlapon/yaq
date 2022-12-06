import { combineReducers } from "redux";
import filtersReducer from "./filters";
import productsReducer from "./products";
import brandReducer from "./brands";
import categoryReducer from "./categories";
import userReducers from "./users";

const rootReducer = combineReducers({
  filters: filtersReducer,
  products: productsReducer,
  brands: brandReducer,
  categories: categoryReducer,
  user: userReducers,
});

export default rootReducer;
