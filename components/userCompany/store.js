const ModelCompany = require("../model/userCompany");

/*Agregar company*/
function addCompany(company) {
  try {
    const myCompany = new ModelCompany(company);
    return myCompany.save();
  } catch (e) {
    console.error("Store: Error database" + e);
  }
}

module.exports = {
  addCompany,
};
