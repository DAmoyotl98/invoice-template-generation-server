const express = require("express");
const invoice = require("../components/invoice/network");
const item = require("../components/item/network");
const user = require("../components/userCompany/network");

const routes = function (server) {
  server.use("/api/invoice", invoice); //invoice
  server.use("/api/item", item); //item
  server.use("/api/user", user); //user
  //server.use('/',express.static('public/build'))
};

module.exports = routes;
