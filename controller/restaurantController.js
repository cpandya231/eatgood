`use strict`

const express = require("express");
const scanDDB = require('../model/scanItemDDB');
var router = express.Router();

router.get("/", (req, res) => {
    let city = req.query.city;
    scanDDB.getRestaurant((err, data) => {
        if (err) {
            console.log("No data found in restaurant table");
            res.json(err);
        } else {
            console.log("Data found");
            res.json(data);
        }
    });

})


module.exports = router;