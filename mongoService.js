var MongoClient = require("mongodb").MongoClient;
var dbName = "Chintan"

var findAllRestaurants=function() {
    var restaurants = [];
    MongoClient.connect("mongodb://localhost:27017/db", (err, client) => {
        if (err) throw err;
        else {
            console.log("Connected to MongoDB!");
            const db = client.db(dbName);
            var restaurants = db.collection("restaurant");
            console.log(restaurants);
            restaurants.find({}).toArray(function (err, doc) {
                console.log("Found records");
                // console.log(doc);
                restaurants = doc;
            })
        }
        return restaurants;
    })
}

module.exports.findAllRestaurants=findAllRestaurants