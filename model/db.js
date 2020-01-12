const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/Chintan",{ useNewUrlParser: true },err=>{
    if(!err) console.log("Connection to MongoDB successfull!!");
    else console.log(err);
})

require("./restaurant.model")