import {
  fetchProductsByCategory,
  fetchProductsByFilter,
  fetchBrands,
} from "../../http/catalogAPI";

export const getAllFilters = (category) => (dispatch) => {
  fetchProductsByCategory(category).then((data) =>
    dispatch(setFilterProducts(data))
  );
};

export const setFilterProducts = (items) => ({
  type: "SET_FILTER_PRODUCTS",
  payload: items,
});
