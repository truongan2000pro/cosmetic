const mongoose = require("mongoose");
const schema = require("./schema");

const MODEL_NAME = "product";
const COLLECTION_NAME = "product";

const model = mongoose.model(MODEL_NAME, schema, COLLECTION_NAME);
module.exports = model;

//model.find
// model.findOne
// model.create
// model.findByIdAndUpdate
// model.findByIdAndRemove
