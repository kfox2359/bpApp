var express = require('express');
var router = express.Router();
var db = require('../modules/db.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/record/:id', function (req, res, next) {
    if (req.params.id == "" || req.params.id == null) {
        return res.status(400).send("An id is a required parameter");
    }
    else if (isNaN(req.params.id)) {
        return res.status(400).send("An Id must be a number");
    }
    let response = db.read(parseInt(req.params.id));
    console.log(response);
    res.send(response);
});

module.exports = router;
