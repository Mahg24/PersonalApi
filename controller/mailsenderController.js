const nodemailer = require("nodemailer");
const config = require("../config/config");
const transporter = nodemailer.createTransport({
  service: config.emailservice,
  auth: { user: config.emailsender, pass: config.emailsenderpassword },
});

function ContactForm(data) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        from: '"Noreply" <noreply@mahg.me>', // sender address
        to: `Miguel,${config.emailreceiver}`, // list of receivers
        subject: "Mensaje de formulario de contacto", // Subject line
        text: data.from + ":" + data.message,
        html: "<h1>" + data.from + "</h1><br><p>" + data.message + "</p>",
      },
      (error, info) => {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          resolve(info);
        }
      }
    );
  });
}

module.exports = { ContactForm };
