const express = require("express");
const response = require("../middlewares/response");
const controller = require("../controller/mailsenderController");
const router = express.Router();
router.post("/contact", (req, res) => {
  controller
    .ContactForm(req.body)
    .then((obj) => {
      response.success(req, res, "Mensaje enviado", obj, 200);
    })
    .catch((error) => {
      response.error(req, res, "Mensaje No enviado", error, 500);
    });
});

module.exports = router;
