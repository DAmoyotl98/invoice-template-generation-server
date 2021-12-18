const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

/*

AGREGAR USER'S COMPANY 
**/
router.post("/", function (req, res) {
  controller
    .addCompany(
      req.body.nameCompany,
      req.body.name,
      req.body.website,
      req.body.address,
      req.body.city,
      req.body.country,
      req.body.phone,
      req.body.email,
      req.body.type
    )
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Network: Internal error", 500, e);
    });
});

//Editar user's company
router.patch("/", function (req, res) {
  controller
    .editCompany(
      req.body.id_user,
      req.body.nameCompany,
      req.body.name,
      req.body.website,
      req.body.address,
      req.body.city,
      req.body.country,
      req.body.phone,
      req.body.email,
      req.body.type
    )
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Network: Internal error", 500, e);
    });
});

module.exports = router;
