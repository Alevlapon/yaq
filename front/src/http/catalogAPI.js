import { guestInstance, authInstance } from "./index";

/*
 * Создание, обновление и удаление категории, получение списка всех категорий
 */
export const createCategory = async (category) => {
  const { data } = await authInstance.post("category/create", category);
  return data;
};

export const updateCategory = async (id, category) => {
  const { data } = await authInstance.put(`category/update/${id}`, category);
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await authInstance.delete(`category/delete/${id}`);
  return data;
};

export const fetchCategories = async () => {
  const { data } = await guestInstance.get(
    "category/getall/category/subcategory"
  );
  return data;
};

/*
 * Создание, обновление и удаление бренда, получение списка всех брендов
 */
export const createBrand = async (brand) => {
  const { data } = await authInstance.post("brand/create", brand);
  return data;
};

export const updateBrand = async (id, brand) => {
  const { data } = await authInstance.put(`brand/update/${id}`, brand);
  return data;
};

export const deleteBrand = async (id) => {
  const { data } = await authInstance.delete(`brand/delete/${id}`);
  return data;
};

export const fetchBrands = async () => {
  const { data } = await guestInstance.get("brand/getall");
  return data;
};

/*
 * Создание, обновление и удаление товара, получение списка всех товаров
 */
export const createProduct = async (product) => {
  const { data } = await authInstance.post("product/create", product);
  return data;
};

export const updateProduct = async (id, product) => {
  const { data } = await authInstance.put(`product/update/${id}`, product);
  return data;
};

export const deleteProduct = async (id) => {
  const { data } = await authInstance.delete(`product/delete/${id}`);
  return data;
};

export const fetchAllProducts = async (categoryId, brandId, page, limit) => {
  let url = "product/getall";
  // фильтрация товаров по категории и/или бренду
  if (categoryId) url = url + "/categoryId/" + categoryId;
  if (brandId) url = url + "/brandId/" + brandId;
  const { data } = await guestInstance.get(url, {
    // params: {
    //   // GET-параметры для постраничной навигации
    //   page,
    //   limit,
    // },
  });
  return data;
};

export const fetchOneProduct = async (id) => {
  const { data } = await guestInstance.get(`product/getone/${id}`);
  return data;
};

export const fetchProductsByCategory = async (category) => {
  let url = "product/getall/category";
  // фильтрация товаров по категории и/или бренду

  const { data } = await guestInstance.post(url, {
    category,
  });
  return data;
};

export const fetchProductsByName = async (productName) => {
  let url = "product/getall/productname";
  // фильтрация товаров по названию

  const { data } = await guestInstance.post(url, {
    productName,
  });
  return data;
};

export const fetchProductsByFilter = async (filters) => {
  let url = "product/getall/filter";
  // фильтрация товаров по всем фильтрам

  const { data } = await guestInstance.post(url, {
    filters,
  });
  return data;
};

export const fetchProductsBySearch = async (key) => {
  let url = `product/search/${key}`;
  // поиск товаров

  const { data } = await guestInstance.get(url);
  return data;
};

export const createProductVario = async (variation) => {
  const { data } = await authInstance.post(
    "variation/create/variation",
    variation
  );
  return data;
};

export const createProductVariOption = async (option) => {
  const { data } = await authInstance.post("variation/create/options", option, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const createProductProp = async (id, prop) => {
  const { data } = await authInstance.post(
    `/product/${id}/property/create`,
    prop
  );
  return data;
};

export const addColor = async (color) => {
  const { data } = await authInstance.post("color/create", color);
  return data;
};
