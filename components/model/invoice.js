const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user_id: {
    type: Schema.ObjectId,
    ref: "UserCompany",
  },
  client_id: {
    type: Schema.ObjectId,
    ref: "UserCompany",
  },
  img: String,
  number: String,
  date_invoice: String,
  date_due: String,
  id_item: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  comment: String,
  subtotal: Number,
  tax: Number,
  discount: Number,
  total: Number,
});

const model = mongoose.model("Invoice", mySchema);
module.exports = model;
