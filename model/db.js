const mongoose= require("mongoose");
const MONGO_URI="mongodb://localhost:27017/Chintan" // process.env.MONGO_URI;
mongoose.connect(MONGO_URI,{ useNewUrlParser: true },err=>{
    if(!err) console.log("Connection to MongoDB successfull!!");
    else console.log(err);
})

require("./restaurant.model")