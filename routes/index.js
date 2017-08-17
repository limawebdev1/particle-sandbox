var express = require('express');
var router = express.Router();


var Particle = require('particle-api-js');
var particle = new Particle();
var token;
/* GET home page. */
router.get('/', function(req, res, next) {
 //particle login

 particle.login({
  username: 'lisa@edntech.com',
  password: process.env.PARTICLE_PASSWORD
 }).then(
  function(data) {
   token = data.body.access_token;
   console.log(token);
  },
  function(err) {
   console.log('Could not log in.', err);
  }
 );
 res.render('index', {
  title: 'Express'
 });
});

module.exports = router;
