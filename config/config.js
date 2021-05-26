const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.PORT || 3000);
module.exports = {
  llave: process.env.LLAVE,
  dburl: process.env.DB,
  dbuser: process.env.DBUSER,
  dbname: process.env.DBNAME,
  dbpass: process.env.DBPASS,
  port: process.env.PORT || 3000,
  emailservice: process.env.EMAILSERVICE,
  emailsender: process.env.EMAILSENDER,
  emailsenderpassword: process.env.EMAILSENDERPASS,
  emailreceiver: process.env.EMAILRECEIVER,
};
