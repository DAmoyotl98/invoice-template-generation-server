const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  nameCompany: String,
  name: String,
  website: String,
  address: String,
  city: String,
  country: String,
  phone: String,
  email: String,
});

const model = mongoose.model("UserCompany", mySchema);
module.exports = model;
