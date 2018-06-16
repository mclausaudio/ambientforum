const express = require("express"),
app = express(),
mongoose = require("mongoose"),
bodyparser = require("body-parser"),
methodOverride = require('method-override'),
passport = require('passport'),
localStrategy = require('passport-local'),
session = require('express-session');

var seedDB = require('./seeds.js'),
    Post = require('./models/post.js'),
    User = require('./models/user.js'),
    Comment = require('./models/comment.js');

var postRoutes = require('./routes/posts.js'),
    indexRoutes = require('./routes/index.js'),
    commentRoutes = require('./routes/comments.js');


mongoose.connect('mongodb://mike:ambientforum415@ds263460.mlab.com:63460/ambientforum');

// mongodb://localhost/synthhoarders


app.use(bodyparser.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));


//passport config
app.use(session({
    secret: 'Silva Electronics',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//this makes a currentUser variable = to req.user, available in every view template
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

// erase all - recreate posts, seed database
// seedDB();

app.use("/posts", postRoutes);
app.use("/", indexRoutes);
app.use("/posts/:id/comments", commentRoutes)

app.get("/", function(req, res){
    res.redirect("/posts");
});

app.get('/about', function(req, res){
    res.render('about');
})


app.listen(process.env.PORT, function(){
    console.log("server started");
})