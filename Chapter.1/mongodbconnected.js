const express = require("express");
const fs = require("fs");

const {logReqRes} = require("./middleware");
const {connectMongoDB} = require("./Connection");
const  userRouter = require("./routes/user");


const app = express();
const PORT = 8000;

connectMongoDB("mongodb://127.0.0.1.:27017/youtube-app-1")
.then(()=>console.log("MongoDB Connected"))

app.use(express.urlencoded({extended: false}));


app.use(logReqRes("log.txt"));

app.use("/user", userRouter)

app.listen(PORT, ()=> console.log(`Server Started at PORT :${PORT}`))
