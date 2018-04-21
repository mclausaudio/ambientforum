const express = require("express"),
app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/posts", function(req, res){
    res.render("posts/index");
})

app.get("/posts/new", function(req, res){
    res.render("posts/new");
})


app.listen(process.env.PORT, function(){
    console.log("server started");
})