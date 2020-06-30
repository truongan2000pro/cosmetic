const model = require("./model");
const { create } = require("./schema");

const handlers = {
  async findMany(req, res, next) {
    try {
      cateogories = await model.find({});
      res.json(cateogories);
    } catch (error) {
      next(error);
    }
  },
  findOne(req, res, next) {
    throw new Error("Not yet support");
  },
  async create(req, res, next) {
    try {
      let data = req.body;

      let cateogory = await model.create(data);

      res.json(cateogory);
    } catch (error) {
      next(error);
    }
  },
  update(req, res, next) {
    throw new Error("not yet support");
  },
  delete(req, res, next) {
    throw new Error("Not yet support");
  },
};

module.exports = handlers;
