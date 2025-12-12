const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const users = require("./MOCK_DATA.json");


const app = express();
const PORT = 8000;


mongoose.connect("mongodb/127.0.0.1.27017/youtube-app-1")
.then(()=> console.log("MongoDB Connection"))
.catch(error=>console.log("MongoDB error", error));


const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    jobtitle:{
        type:String,
    },
    gender:{
        type:String,
    },
},
     
    {timestamps:true}
);

const User = mongoose.model("user", Schema);


app.use(express.urlencoded({extended: false}));

app.use((req, res, next)=>{
    fs.appendFile("log.txt", `/n${Date.now()}: ${req.method}: ${req.path}`, (err, data)=>{
        next()
    })

app.use((req, res, next)=>{
   console.log("Hello from Middleware");
   next()
  });

})



