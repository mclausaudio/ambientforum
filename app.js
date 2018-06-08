const express = require("express"),
app = express(),
mongoose = require("mongoose"),
bodyparser = require("body-parser");

var seedDB = require('./seeds.js'),
Post = require('./models/post.js');



mongoose.connect('mongodb://localhost/synthhoarders');
app.use(bodyparser.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


seedDB();

app.get("/", function(req, res){
    
    res.render("landing");
});

app.get("/posts", function(req, res){
    Post.find({}, function (err, Posts){
        if (err) {
            console.log(err)
        } else {
            res.render("posts/index", {posts:Posts});
        }
    })
})

app.get("/posts/new", function(req, res){
    res.render("posts/new");
})


app.listen(process.env.PORT, function(){
    console.log("server started");
})