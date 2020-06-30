const mongoose = require("mongoose");
const MODEL_NAME = "categories";
const COLLECTION_NAME = "categories";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Yeu cau title"],
    unique: true,
  },
  description: String,
});

module.exports = schema;
