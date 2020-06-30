const model = require("./model");
const mongoose = require("mongoose");
/**
 * @description: query:
 * - pageIndex: Number
 * - pageSize : Number
 * - count: Boolean;
 * - sort: "1"|"asc"|"-1"|"desc"
 * - sortBy: field name(ex:"title")
 * - filter & search : String ,
 *
 */

const handlers = {
  async findMany(req, res, next) {
    try {
      let {
        pageIndex = 1,
        pageSize = 10,
        count,
        sort = "asc",
        sortBy = "title",
        search = "",
        categoryId,
      } = req.query;
      pageIndex = parseInt(pageIndex);
      pageSize = parseInt(pageSize);
      count = !!count;

      let skip = (pageIndex - 1) * pageSize;
      let limit = pageSize;
      let conditions = {};
      if (search) {
        conditions.title = new RegExp(search, "i"); // find item with title or somethings else with search in regex and must be in regex
      }
      if (categoryId) {
        conditions.categories = mongoose.Types.ObjectId(categoryId);
      }

      if (count) {
        let count = await model.countDocuments(conditions);
        res.json({ count });
      } else {
        let items = await model
          .find(conditions)
          .skip(skip)
          .limit(limit)
          .sort({
            [sortBy]: sort, // [] in object means get value of the sortBy in here value of the sortBy = title
          })
          .populate("categories", "-description");
        res.json(items);
      }
    } catch (error) {
      next(error);
    }
  },
  async findOne(req, res, next) {
    try {
      let id = req.params.id;
      let item = await model.findById(id).populate("categories", "title");
      res.json(item);
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      let data = req.body;
      let item = await model.create(data);
      res.json(item);
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      data = req.body;
      let id = data._id;

      if (!id) {
        throw new Error("Missing id");
      }
      let item = await model.findByIdAndUpdate(id, data, {
        new: true,
      });
      res.json(item);
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      let id = req.params.id;

      let item = await model.findByIdAndDelete(id);

      res.json(item);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = handlers;
