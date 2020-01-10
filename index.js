const express = require("express");
const Joi = require('joi');
const app = express();

//To parse json request
app.use(express.json());
var restaurants = [
    { id: 1, name: "Namma kitchen" },
    { id: 2, name: "Hyderabad House" },
    { id: 3, name: "Apache High Street" },
    { id: 4, name: "Namma kitchen" },

]
// default route
app.get("/", (req, res) => {
    res.send("Get request works")
})

//specific route
app.get("/api/restaurants", (req, res) => {
    res.send(restaurants)
})

//Find by query paran
app.get("/api/restaurants/:id", (req, res) => {

    const restaurant = restaurants.find(r => {
        return r.id === parseInt(req.params.id)
    })

    if (!restaurant) return res.status(404).send("Restaurant with given id not found");
    res.status(200).send(restaurant);

})

//Add new restaurant
app.post("/api/restaurants", (req, res) => {

    var { error } = validateRestaurant(req.body);
    if (error) return res.status(400).send(error.details[0].message);
        
    var restaurant = {
        id: restaurants.length + 1,
        name: req.body.name
    }
    restaurants.push(restaurant);
    res.send(restaurant);

})


//Update restaurant
app.put("/api/restaurants/:id", (req, res) => {

    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
    if (!restaurant) return res.status(404).send("Restaurant with given id not found");

    var { error } = validateRestaurant(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    restaurant.name = req.body.name;
    res.send(restaurant);



})

//Delete restaurant

app.delete("/api/restaurants/:id", (req, res) => {

    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
    if (!restaurant) return res.status(404).send("Restaurant with given id not found");
    const index = restaurants.indexOf(restaurant)
    restaurants.splice(index, 1)
    res.send(restaurant);



})

function validateRestaurant(restaurant) {
    var schema = {
        name: Joi.string().min(3).required()
    }
    var result = Joi.validate(restaurant, schema);
    return result;
}

app.listen(3000, () => {
    console.log("Listening to 3000..")
})