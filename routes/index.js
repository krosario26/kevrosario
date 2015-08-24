var express = require('express');
var flash = require('connect-flash');
var router = express.Router();
var app = express();
var nodemailer = require('nodemailer');

/*  Using connect-flash */
app.use(flash());
app.use(function(req, res, next){
  res.locals.success = req.flash('success');
  res.locals.errors = req.flash('error');
})

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
    text: 'Hi my name is ' + req.body.firstName + " " + req.body.lastName + ". My email is " + req.body.email
  };

  transporter.sendMail(mailoptions, function(error, info) {
    if(error) {
      return console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
