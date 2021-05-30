const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const router = require("./routes/router");
let app = express();
app.use(cors());
app.listen(config.port);
app.use(
  express.json({
    limit: "200mb",
  })
);
router(app);
app.use(express.urlencoded({ extended: false }));
console.log("Ready in port :" + config.port);
