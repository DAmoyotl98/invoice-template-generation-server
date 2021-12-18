const store = require("./store");

{
  /*Agregar invoice*/
}
function addInvoice(
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
  if (!user_id) {
    return Promise.reject("Controller invoice: Invalid parameters");
  }

  const invoice = {
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
  };
  return store.addInvoice(invoice);
}

//Obtener invoice por ID
function getInvoiceById(id_invoice) {
  if (!id_invoice) {
    return Promise.reject("Controller invoice: Invalid parameters");
  }
  return store.getInvoiceById(id_invoice);
}

//Delete invoice
function deleteInvoice(id_invoice) {
  if (!id_invoice) {
    return Promise.reject("Controller invoice: Invalid parameters");
  }
  return store.deleteInvoice(id_invoice);
}

//Edit invoice
function editInvoice(
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
  if (!id_invoice || !user_id) {
    return Promise.reject("Controller invoice: Invalid parameters");
  }

  return store.editInvoice(
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
  );
}

module.exports = {
  addInvoice,
  getInvoiceById,
  deleteInvoice,
  editInvoice,
};
