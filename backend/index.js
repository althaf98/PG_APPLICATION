const express = require("express");
const app =express();
const port = 4000;
const path =require("path");
const { signup } = require("./controllers/userController");
const userRoute = require("./routes/userRoute");

app.use(express.json());

app.use("/api/v1",userRoute);



app.listen(port,()=>{
    console.log(`app is Listening on ${port}`);
})

app.get('/user/login',(req,res)=>{
    res.send("User data is successfully saved");
})
