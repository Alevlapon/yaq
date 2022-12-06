import Product from "../models/Product.js";
import product_card from "../../../front/yaq/src/data/product_data.js";

const data = product_card;

const seeder = () => {
  data.forEach(async (element) => {
    try {
      // console.log(element.id);
      Product.create(element, "");
    } catch (e) {
      console.log("ошибка");
    }
  });
};

seeder();
