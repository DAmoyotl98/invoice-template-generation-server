const ModelInvoice = require("../model/invoice");

/*Agregar invoice*/
function addInvoice(invoice) {
  try {
    const myInvoice = new ModelInvoice(invoice);
    return myInvoice.save();
  } catch (e) {
    console.error("Store: Error database" + e);
  }
}

module.exports = {
  addInvoice,
};
