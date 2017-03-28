var router = require('express').Router();
var User = require('../models/user');


router.get('/', function(req, res) {

    User.getEmployees().then(function(empList) {
        res.send(empList);
    }).catch(function(err) {
        console.log("error getting employee list", err);
        res.sendStatus(500);
    })
});

router.get('/:empno', function(req, res) {

    User.getEmployeeById(req.params.empno).then(function(emp) {

        res.send(emp);
    }).catch(function(err) {
        console.log('error getting employee', err);
    })
})


module.exports = router;
