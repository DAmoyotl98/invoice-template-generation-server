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
  email
) {
  {
    /*if(!nameCompany || !name || !website || !phone || !email){
        return Promise.reject('Controller: Invalid parameters, image is optional')
    }*/
  }

  const company = {
    nameCompany,
    name,
    website,
    address,
    city,
    country,
    phone,
    email,
  };
  return store.addCompany(company);
}

module.exports = {
  addCompany,
};
