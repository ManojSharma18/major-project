var express = require('express');
var generator = require('card-generator');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const cards = [];
  for(let i=0;i<500;i++){
    cards.push(generator())
  }

  res.render('index', { title: 'Bootstrap Cards', cards });
});

module.exports = router;
