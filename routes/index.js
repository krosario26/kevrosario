var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index', { root: __dirname, title:'Kevin Rosario || Web Developer' });
});

module.exports = router;
