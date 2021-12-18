const ModelItem = require("../model/item");

/*Agregar item*/
function addItem(item) {
  try {
    const myItem = new ModelItem(item);
    return myItem.save();
  } catch (e) {
    console.error("Store item: Error database" + e);
  }
}

//Editar item
async function editItem(id, id_item, description, quantity, price) {
  try {
    const item = await ModelItem.findOneAndUpdate(
      { _id: id },
      { id_item, description, quantity, price }
    );
    return item.save();
  } catch (e) {
    console.error("Store item: Error database" + e);
    return Promise.reject(new Error(e));
  }
}

//Obtener item por id
async function getItemById(id_item) {
  try {
    const item = await ModelItem.findById(id_item).exec();
    return item;
  } catch (e) {
    console.error("Store item: Error database" + e);
    return Promise.reject(new Error(e));
  }
}

module.exports = {
  addItem,
  editItem,
  getItemById,
};
