var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/synopsis", function(req, res){
    res.render("synopsis");
});

app.get("/cast", function(req, res){
    res.render("cast");
});

app.get("/crew", function(req, res){
    res.render("crew");
});

app.get("/news", function(req, res){
    res.render("news");
});

app.listen(port, function(){
    console.log("Christmas site is online");
});