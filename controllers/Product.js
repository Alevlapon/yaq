import ProductModel from '../models/Product.js';
import AppError from '../errors/AppError.js';

class Product {
  /*
  method: GET
  desc: get all products
  */
  async getAll(req, res, next) {
    try {
      let { limit, page } = req.query;
      const {
        categoryId = null,
        brandId = null,
        sizeId = null,
        colorId = null,
      } = req.params;

      limit =
        limit && /[0-9]+/.test(limit) && parseInt(limit) ? parseInt(limit) : 9;
      page = page && /[0-9]+/.test(page) && parseInt(page) ? parseInt(page) : 1;
      const options = { categoryId, brandId, sizeId, colorId, limit, page };
      const products = await ProductModel.getAll(options);
      res.json(products);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  /*
  method: GET
  desc: get one products
  */
  async getOne(req, res, next) {
    const { id } = req.params;
    try {
      if (!id) {
        throw new Error('Не указан id товара');
      }
      const product = await ProductModel.getOne(id);
      res.json(product);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  /*
  method: GET
  desc: search products by name
  */
  async searchProduct(req, res, next) {
    try {
      const { key } = req.params;
      const result = await ProductModel.search(key);
      res.json(result);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  /*
  method: POST
  desc: create product
  */
  async create(req, res, next) {
    try {
      if (Object.keys(req.body).length === 0) {
        throw new Error('Нет данных для создания');
      }
      const product = await ProductModel.create(req.body, req.files?.image);
      res.json(product);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  /*
  method: PUT
  desc: update product
  */
  async update(req, res, next) {
    const { id } = req.params;
    try {
      if (!id) {
        throw new Error('Не указан id товара');
      }
      if (Object.keys(req.body).length === 0) {
        throw new Error('Нет данных для создания');
      }
      const product = await ProductModel.update(id, req.body, req.files?.image);
      res.json(product);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  /*
  method: DELETE
  desc: delete product
  */
  async delete(req, res, next) {
    const { id } = req.params;
    try {
      if (!id) {
        throw new Error('Не указан id товара');
      }
      const product = await ProductModel.delete(id);
      res.json(product);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }
}

export default new Product();
