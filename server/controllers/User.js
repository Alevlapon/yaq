import UserModel from "../models/User.js";
import AppError from "../errors/AppError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const makeJwt = (id, name, email, role) => {
  return jwt.sign({ id, name, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class User {
  async signup(req, res, next) {
    const { name, email, password, phone, role = "USER" } = req.body;
    try {
      if (!email || !password) {
        throw new Error("Пустой email или пароль");
      }

      if (role !== "USER") {
        throw new Error("Возможна только роль USER");
      }

      const hash = await bcrypt.hash(password, 5);
      const user = await UserModel.create({
        name,
        email,
        password: hash,
        phone,
        role,
      });
      const token = makeJwt(user.id, user.name, user.email, user.role);
      return res.json({ token });
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.getByEmail(email);
      let compare = bcrypt.compareSync(password, user.password);
      if (!compare) {
        throw new Error("Указан неверный пароль");
      }
      const token = makeJwt(user.id, user.name, user.email, user.role);
      return res.json({ token });
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const users = await UserModel.getAll();
      res.json(users);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async getOne(req, res, next) {
    const { id } = req.params;

    try {
      if (!id) {
        throw new Error("Не указан id пользователя");
      }
      const user = await UserModel.getOne(req.params.id);
      res.json(user);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async check(req, res, next) {
    const id = req.auth.id;

    try {
      if (!id) {
        throw new Error("Не указан id пользователя");
      }
      const user = await UserModel.getOne(id);
      const token = makeJwt(user.id, user.name, user.email, user.role);
      res.json({ token });
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async create(req, res) {
    try {
      const user = await UserModel.create(req.body);
      res.json(brand);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async update(req, res, next) {
    const id = req.auth.id;
    try {
      if (!id) {
        throw new Error("Не указан id пользователя");
      }
      const user = await UserModel.update(id, req.body);
      res.json(user);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      if (!req.params.id) {
        throw new Error("Не указан id пользователя");
      }
      const user = await UserModel.delete(req.params.id);
      res.json(user);
    } catch (e) {
      next(AppError.badRequest(e.message));
    }
  }
}

export default new User();
