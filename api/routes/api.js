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
    db.read(req.params.id).then(function success(data) {
        return res.send(data);
    },
        function error(err) {
            return res.status(500).send("Something went wrong reading the record: " + req.params.id);
        });
});

router.get('/records', function (req, res) {
    db.readAll().then((data) => {
        return res.send(data);
    }, (err) => {
        return res.status(500).send("Something went wrong reading all the records ");
    })
});

module.exports = router;
