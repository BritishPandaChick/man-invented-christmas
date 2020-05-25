var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));

app.use("/", function(req, res){
    res.render("landing")
});

app.listen(port, function(){
    console.log("Christmas site is online");
});