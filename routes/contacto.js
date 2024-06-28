var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('soy pagina de contacto')
  });

module.exports = router;