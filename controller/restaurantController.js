`use strict`

const express = require("express");
const mongoose = require('mongoose');
var router = express.Router();
const Restaurant = mongoose.model("restaurant")
router.get("/", (req, res) => {
    let city = req.query.city;
    if (city) {
        Restaurant.find({ "City": city })
            .exec(populateData(res));

    } else {
        Restaurant.find().limit(5).exec(populateData(res))
    }

})


module.exports = router;

function populateData(res) {
    return (err, data) => {
        if (err)
            console.log("No data found in restaurant table");
        else {
            console.log("Data found");
            res.json(data);
        }
    };
}