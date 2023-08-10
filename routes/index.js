var express = require('express');
//const path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("homePage");
});

router.get('/branches', function(req, res, next) {  
  res.render("branches");
});

router.get('/menu', function(req, res, next) {
  res.render("menuPage");
});

router.get('/signUp', function(req, res, next) {
  res.render("signUp");
});

router.get('/delivery', function(req, res, next) {
  res.render("delivery");
});

module.exports = router;