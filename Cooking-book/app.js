const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;
const Recepie = require("../models/recepie")

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/Recetas/recetas" , {useNewUrlParser: true, useUnifiedTopology: true});

app.get("/all-recepies", (req, res)=>{
    console.log("GET /all-recepies");
  Recepie.find().then((result) =>{
    res.send(result);
  }).catch((err) =>{
    console.log(err);
  })
})
