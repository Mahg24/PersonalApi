const express = require("express");
const mailsender = require("./mailsender");
const routes = function (server) {
  server.use("/mailsender", mailsender);
};

module.exports = routes;
