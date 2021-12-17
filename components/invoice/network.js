const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

/*

AGREGAR INVOICE NUEVO
**/
router.post("/", function (req, res) {
  controller
    .addInvoice(
      req.body.user_id,
      req.body.client_id,
      req.body.img,
      req.body.number,
      req.body.date_invoice,
      req.body.date_due,
      req.body.id_item,
      req.body.comment,
      req.body.subtotal,
      req.body.tax,
      req.body.discount,
      req.body.total
    )
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Network: Internal error", 500, e);
    });
});

module.exports = router;
