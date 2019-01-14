var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', function (req, res, next) {
  res.send({
    code:0
  });

});
router.get('/info', function (req, res, next) {
  res.send('info');
});

module.exports = router;
