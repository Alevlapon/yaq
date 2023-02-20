import { fetchCategories } from "../../http/catalogAPI";

export const getAllCategories = () => (dispatch) => {
  fetchCategories().then((data) => dispatch(setCategories(data.rows)));
};

export const setCategories = (items) => ({
  type: "SET_CATEGORIES",
  payload: items,
});
