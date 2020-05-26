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

app.use("/synopsis", function(req, res){
    res.render("synopsis");
});

app.use("/cast", function(req, res){
    res.render("cast");
});

app.use("/crew", function(req, res){
    res.render("crew");
});

app.use("/news", function(req, res){
    res.render("news");
});

app.listen(port, function(){
    console.log("Christmas site is online");
});