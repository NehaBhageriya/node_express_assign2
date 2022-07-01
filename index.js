

const express = require("express"); //we will import the express here
const app = express(); ///creating the object
app.get("/",function(req,res){//creating the home route
    res.send("<h1>Welcome to Express js</h1>")
})
app.get("/api/main",function(req,res){ //creating the another route
    res.write("<h1>Welcome to Express js page</h1>")
    res.write("This is my first express js server Assignment")
    res.write(JSON.stringify({name:"Express js server creation"}))

res.end();
})

app.listen(3002 ,function(){
    console.log("server is running ");
})