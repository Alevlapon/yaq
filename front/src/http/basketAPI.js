import { guestInstance } from "./index.js";

export const fetchBasket = async () => {
  const { data } = await guestInstance.get("basket/getone");
  return data;
};

export const append = async (product) => {
  const { data } = await guestInstance.put(
    `basket/product/${product.id}/${product.size}/append/1`
  );
  return data;
};

export const increment = async (product) => {
  const { data } = await guestInstance.put(
    `basket/product/${product.id}/${product.size}/increment/1`
  );
  return data;
};

export const decrement = async (product) => {
  const { data } = await guestInstance.put(
    `basket/product/${product.id}/${product.size}/decrement/1`
  );
  return data;
};

export const remove = async (product) => {
  const { data } = await guestInstance.put(
    `basket/product/${product.id}/${product.size}/remove`
  );
  return data;
};

export const clear = async () => {
  const { data } = await guestInstance.put(`basket/clear`);
  return data;
};
