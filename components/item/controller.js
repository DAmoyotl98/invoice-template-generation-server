const store = require("./store");

{
  /*Agregar item*/
}
function addItem(id_item, description, quantity, price) {
  if (!id_item || !description || !quantity || !price) {
    return Promise.reject("Controller item: Invalid parameters");
  }

  const item = {
    id_item,
    description,
    quantity,
    price,
  };
  return store.addItem(item);
}

//Edit item
function editItem(
  id, id_item, description, quantity, price
) {
  return store.editItem(
    id, id_item, description, quantity, price
  );
}

//Obtener item por ID
function getItemById(id_item) {
  if (!id_item) {
    return Promise.reject("Controller item: Invalid parameters");
  }
  return store.getItemById(id_item);
}

module.exports = {
  addItem,
  editItem,
  getItemById
};
