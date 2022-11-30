const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transport = nodeMailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "3fc2d6bd0e3a27",
      pass: "253177e82ef4fe",
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  transport.sendMail(mailOptions, (err) => {
    err ? console.log(err) : "";
  });
};
