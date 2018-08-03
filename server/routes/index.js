
const express = require('express');

const Hotel = require('../model/hotel');

const router = express.Router();

router.get('/', function (req, res) {

    Hotel.get(req.query).then((data)=>{
        res.send(data)
    });

});

module.exports = router;

