const express = require("express");
const mongoose = require('mongoose');
var router= express.Router();
const Restaurant= mongoose.model("restaurant")
router.get("/",(req,res)=>{
  
    Restaurant.find().limit(5).exec((err,data)=>{
        if(err) console.log("No data found in restaurant table");
        else {
            console.log("Data found")
            res.json(data)
        }
    })
})

module.exports=router;