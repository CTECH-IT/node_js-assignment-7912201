var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'saturn.rochesterschools.org',
  port: 25,
  //secure: false, // use SSL
  auth: {
    user: 'testmail@rochesterschools.org',
    pass: 'Javascript2022'
  },
  tls: {
    rejectUnauthorized: false
  }
});

var mailOptions = {
  from: 'testmail@rochesterschools.org',
  to: 'jobartucz@saturn.rochesterschools.org',
  subject: 'Caleb Pardeik sending Email using Node.js',
  text: 'Never gonna give you up, never gonna let you down, Never gonna run around and desert you, Never gonna make you cry, never gonna say goodbye, Never gonna tell a lie and hurt you'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});