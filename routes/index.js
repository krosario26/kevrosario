var express = require('express');
var router = express.Router();
var app = express();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index', { root: __dirname, title:'Kevin Rosario || Web Developer' });
});

router.post('/send', function(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'krosariopro@gmail.com',
      pass: 'kevin_rosario'
    }
  });

  var mailoptions = {
    from: 'kevrosario.com <krosariopro@gmail.com>',
    to: 'kevin@kevrosario.com',
    subject: 'kevrosario Message',
    text: 'Hi my name is ' + req.body.firstName + " " + req.body.lastName + "; " + req.body.description + " my email is " + req.body.email
  };

  transporter.sendMail(mailoptions, function(error, info) {
    if(error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);

  });
});

module.exports = router;
