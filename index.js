const express = require("express");
const Joi = require('joi');
const app = express();
const restaurantController = require("./controller/restaurantController")
    //To parse json request
app.use(express.json());
var restaurants = []
    // default route
app.get("/", (req, res) => {
    res.send("Get request works")
})

app.use("/api/restaurants", restaurantController);


// app.listen(3000, () => {
//     console.log("Listening to 3000..")
// })

module.exports = app;