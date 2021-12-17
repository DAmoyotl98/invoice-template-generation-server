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
  if (
    !user_id ||
    !number ||
    !date_invoice ||
    !id_item ||
    !subtotal ||
    !tax ||
    !total
  ) {
    return Promise.reject("Controller: Invalid parameters, image is optional");
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

module.exports = {
  addInvoice,
};
