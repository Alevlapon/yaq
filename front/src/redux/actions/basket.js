import {
  fetchBasket,
  append,
  increment,
  decrement,
  remove,
} from "../../http/basketAPI";

export const getBasket = () => (dispatch) => {
  fetchBasket().then((data) => dispatch(setBasket(data)));
};

export const addToBasket = (product) => (dispatch) => {
  append(product).then((data) => dispatch(setBasket(data)));
};

// export const incrementProduct = (product) => (dispatch) => {
//   increment(product).then((data) => dispatch(setBasket(data)));
// };

// export const decrementProduct = (product) => (dispatch) => {
//   decrement(product).then((data) => dispatch(setBasket(data)));
// };

// export const removeProduct = (product) => (dispatch) => {
//   remove(product).then((data) => dispatch(setBasket(data)));
// };

export const incrementProduct = (product) => (dispatch) => {
  increment(product).then(() => dispatch(incProduct(product)));
};

export const decrementProduct = (product) => (dispatch) => {
  decrement(product).then(() => dispatch(decProduct(product)));
};

export const removeProduct = (product) => (dispatch) => {
  remove(product).then(() => dispatch(delProduct(product)));
};

export const setBasket = (items) => ({
  type: "SET_BASKET",
  payload: items,
});

export const incProduct = (product) => ({
  type: "INC_PRODUCT",
  payload: product,
});

export const decProduct = (product) => ({
  type: "DEC_PRODUCT",
  payload: product,
});

export const delProduct = (product) => ({
  type: "DEL_PRODUCT",
  payload: product,
});
