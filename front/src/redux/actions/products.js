import { ThemeConsumer } from "styled-components";
import {
  fetchProductsByCategory,
  fetchProductsByFilter,
  fetchOneProduct,
  fetchProductsByName,
  fetchProductsBySearch,
} from "../../http/catalogAPI";

export const getProductsByFilter = (filters) => (dispatch) => {
  fetchProductsByFilter(filters).then((data) => console.log(data));
};

export const getProductsByCategory = (category) => (dispatch) => {
  fetchProductsByCategory(category).then((data) => dispatch(setProducts(data)));
};

export const getProductById = (id) => (dispatch) => {
  fetchOneProduct(id).then((data) => dispatch(setProducts(data)));
};

export const getProductsByName = (name) => (dispatch) => {
  fetchProductsByName(name).then((data) => dispatch(setProducts(data)));
};

export const getProductsBySearch = (key) => (dispatch) => {
  fetchProductsBySearch(key).then((data) => dispatch(setProducts(data)));
};

export const setProducts = (items) => ({
  type: "SET_PRODUCTS",
  payload: items,
});
