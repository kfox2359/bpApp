var express = require('express');
var router = express.Router();
var db = require('../modules/db.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.sendFile("./routesInfo.html",{root:__dirname});
});

router.get('/record/:id', function (req, res, next) {
    if (req.params.id == "" || req.params.id == null) {
        return res.status(400).send("An id is a required parameter");
    }
    db.read(req.params.id).then(function success(data) {
        if(data)
        {
            return res.send(data);
        }
        else{
            return res.status(400).send("Record " +  req.params.id + " was not found"); 
        }
    },
        function error(err) {
            return res.status(500).send("Error retrieving record: " + req.params.id);
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
