const mongoose = require("mongoose");

var restaurantSchema = new mongoose.Schema({
    restaurant_id: {
        type: String
    },
    country_code: {
        type: Number
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    locality: {
        type: String
    },
    locality_verbose: {
        type: String
    },
    longitude: {
        type: Number
    },
    latitude: {
        type: Number
    },
},{collection:"restaurant"})

mongoose.model("restaurant",restaurantSchema);