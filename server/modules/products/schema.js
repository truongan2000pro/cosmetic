const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "require title"],
  },
  categories: [
    {
      type: ObjectId,
      ref: "categories", // references to MODEL_NAME
    },
  ],
});

module.exports = schema;
