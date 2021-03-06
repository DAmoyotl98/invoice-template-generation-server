const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

/*

AGREGAR ITEM NUEVO
**/
router.post("/", function (req, res) {
  controller
    .addItem(
      req.body.id_item,
      req.body.description,
      req.body.quantity,
      req.body.price
    )
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Network: Internal error", 500, e);
    });
});

//Editar item
router.patch("/", function (req, res) {
  controller
    .editItem(
      req.body.id,
      req.body.id_item,
      req.body.description,
      req.body.quantity,
      req.body.price
    )
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Network: Internal error", 500, e);
    });
});

//Obtener item por id
router.post("/id", function (req, res) {
  controller
    .getItemById(req.body.id_item)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Network: Internal error", 500, e);
    });
});

module.exports = router;
