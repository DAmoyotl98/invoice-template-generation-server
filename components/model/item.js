const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  id_item: String,
  description: String,
  quantity: Number,
  price: Number,
});

const model = mongoose.model("Item", mySchema);
module.exports = model;
