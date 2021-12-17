const store = require("./store");

{
  /*Agregar item*/
}
function addItem(id_item, description, quantity, price) {
  if (!id_item || !description || !quantity || !price) {
    return Promise.reject("Controller: Invalid parameters, image is optional");
  }

  const item = {
    id_item,
    description,
    quantity,
    price,
  };
  return store.addItem(item);
}

module.exports = {
  addItem,
};
