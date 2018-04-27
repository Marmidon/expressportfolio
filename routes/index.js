//<!--Mykyta Stenko Personal ExpressPortfolio Assignment 3-->
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nikita Stenko Portfolio' });
});



/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET products  page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/* GET project_webstore page. */
router.get('/webstore', function(req, res, next) {
  res.render('projects', {title: 'Webstore' });
});
/* GET project_PAAS page. */
router.get('/paass', function(req, res, next) {
  res.render('projects', {title: 'PAASS' });
});
/* GET project_SMS page. */
router.get('/sms', function(req, res, next) {
  res.render('projects', {title: 'SMS' });
});


module.exports = router;
