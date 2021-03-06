`use strict`

const express = require("express");
const scanDDB = require('../model/scanItemDDB');
var router = express.Router();

router.get("/", (req, res) => {

    let queryParams = req.query;
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    scanDDB.getRestaurant(queryParams).then((data) => {

        res.json(data);

    }).catch((err) => {
        res.json(err);
    });

})




module.exports = router;