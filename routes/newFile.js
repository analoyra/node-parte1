const { router } = require('./contacto');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('pagina de contacto');
});
