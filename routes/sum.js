var router = require('express').Router();


router.get('/', function(req, res) {

    var a = req.query.a;
    var b = req.query.b;
    var c = parseInt(a) + parseInt(b);

    res.status(200).json(c);

});

module.exports = router;
