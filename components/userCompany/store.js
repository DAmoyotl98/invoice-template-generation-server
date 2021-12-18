const ModelCompany = require("../model/userCompany");

/*Agregar company*/
function addCompany(company) {
  try {
    const myCompany = new ModelCompany(company);
    return myCompany.save();
  } catch (e) {
    console.error("Store company: Error database" + e);
  }
}

//Editar company
async function editCompany(
  id_user,
  nameCompany,
  name,
  website,
  address,
  city,
  country,
  phone,
  email,
  type
) {
  try {
    const company = await ModelCompany.findOneAndUpdate(
      { _id: id_user },
      { nameCompany, name, website, address, city, country, phone, email, type }
    );
    return company.save();
  } catch (e) {
    console.error("Store company: Error database" + e);
    return Promise.reject(new Error(e));
  }
}

module.exports = {
  addCompany,
  editCompany,
};
