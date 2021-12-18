const ModelInvoice = require("../model/invoice");
const ModelUserCompany = require("../model/userCompany");

/*Agregar invoice*/
function addInvoice(invoice) {
  try {
    const myInvoice = new ModelInvoice(invoice);
    return myInvoice.save();
  } catch (e) {
    console.error("Store invoice: Error database" + e);
  }
}

//Obtener invoice por id
async function getInvoiceById(id_invoice) {
  try {
    const invoice = await ModelInvoice.findById(id_invoice)
      .populate("user_id")
      .populate("client_id")
      .exec();
    return invoice;
  } catch (e) {
    console.error("Store invoice: Error database" + e);
    return Promise.reject(new Error(e));
  }
}

//Eliminar invoice
async function deleteInvoice(id_invoice) {
  try {
    const invoice = await ModelInvoice.findById(id_invoice).exec();
    const user = await ModelUserCompany.findOneAndDelete({
      _id: invoice.user_id,
    }).exec();
    const client = await ModelUserCompany.findOneAndDelete({
      _id: invoice.client_id,
    }).exec();
    const invoiceD = await ModelInvoice.findOneAndDelete({
      _id: id_invoice,
    }).exec();

    return invoiceD;
  } catch (e) {
    console.error("Store invoice: Error database" + e);
    return Promise.reject(new Error(e));
  }
}

//Editar invoice
async function editInvoice(
  id_invoice,
  user_id,
  client_id,
  img,
  number,
  date_invoice,
  date_due,
  id_item,
  comment,
  subtotal,
  tax,
  discount,
  total
) {
  try {
    const invoice = await ModelInvoice.findOneAndUpdate(
      { _id: id_invoice },
      {
        user_id,
        client_id,
        img,
        number,
        date_invoice,
        date_due,
        id_item,
        comment,
        subtotal,
        tax,
        discount,
        total,
      }
    );
    return invoice.save();
  } catch (e) {
    console.error("Store invoice: Error database" + e);
    return Promise.reject(new Error(e));
  }
}

module.exports = {
  addInvoice,
  getInvoiceById,
  deleteInvoice,
  editInvoice,
};
