const nodemailer = require("nodemailer");
const User = require("../model/user");

const email = async (body) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kimpalpalkim@gmail.com",
      pass: "nqkmqrrrvnbrbpcp",
    },
  });

  var mailOptions = {
    from: "rizkifajarkk@gmail.com",
    to: body,
    subject: "Sending Email and just testing",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + body + " " + info.response);
    }
  });
};

module.exports = email