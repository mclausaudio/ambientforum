const express = require("express"),
app = express(),
mongoose = require("mongoose"),
bodyparser = require("body-parser");

var seedDB = require('./seeds.js'),
Post = require('./models/post.js');

var postRoutes = require('./routes/posts.js');


mongoose.connect('mongodb://localhost/synthhoarders');
app.use(bodyparser.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


seedDB();

app.use("/posts", postRoutes);

app.get("/", function(req, res){
    res.render("landing");
});


app.listen(process.env.PORT, function(){
    console.log("server started");
})