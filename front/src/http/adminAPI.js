import { guestInstance, authInstance } from "./index";

export const fetchAllColors = async () => {
  let url = "color/getall";

  const { data } = await guestInstance.get(url);
  return data;
};

export const fetchAllBrands = async () => {
  let url = "brand/getall";

  const { data } = await guestInstance.get(url);
  return data;
};
