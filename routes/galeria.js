var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('aca podras ver todos nuestros productos')
  });

module.exports = router;