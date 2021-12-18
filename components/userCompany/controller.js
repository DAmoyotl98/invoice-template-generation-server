const store = require("./store");

{
  /*Agregar user's company*/
}
function addCompany(
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
  const company = {
    nameCompany,
    name,
    website,
    address,
    city,
    country,
    phone,
    email,
    type,
  };
  return store.addCompany(company);
}

//Edit user's company
function editCompany(
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
  return store.editCompany(
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
  );
}

module.exports = {
  addCompany,
  editCompany,
};
