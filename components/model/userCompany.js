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
  type: Number //Para diferenciar los usuarios de los clientes
});

const model = mongoose.model("UserCompany", mySchema);
module.exports = model;
