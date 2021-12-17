const ModelItem = require("../model/item");

/*Agregar item*/
function addItem(item) {
  try {
    const myItem = new ModelItem(item);
    return myItem.save();
  } catch (e) {
    console.error("Store: Error database" + e);
  }
}

module.exports = {
  addItem,
};
