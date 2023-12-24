var nodemailer = require('nodemailer');
require('dotenv').config()

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAILADDRESS,
    pass: process.env.MAILPASS
  }
});

const sendMail = transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports = sendMail(mailOptions);