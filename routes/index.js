var express = require('express');
var router = express.Router();

var Particle = require('particle-api-js');
var particle = new Particle();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
