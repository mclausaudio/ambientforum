var express = require('express'),
    router = express.Router({mergeParams:true}); 
    
var Post = require('../models/post.js');
 // INDEX ROUTE 
router.get("/", function(req, res){
    Post.find({}, function (err, Posts){
        if (err) {
            console.log(err)
        } else {
            res.render("posts/index", {posts:Posts});
        }
    })
});
// POST ROUTE
router.post('/', function(req, res){
    var title = req.body.title,
        image = req.body.image,
        text = req.body.text;
        
    var newPost = {title: title, image: image, text:text};
    Post.create(newPost, function(err, newlyCreated){
        if (err) {
            console.log(err)
            res.redirect("back");
        } else {
            res.redirect('/posts')
        }
    })
})

// NEW ROUTE - takes to page to create new post
router.get("/new", function (req, res){
    res.render('../views/posts/new');
});
// SHOW ROUTE - show individual post
router.get("/:id", function(req, res){
    Post.findById(req.params.id, function(err, post){
        if (err) {
            console.log(err)
        } else {
            res.render('../views/posts/show', {post:post});    
        }
    })
});

//EDIT - this takes you to the edit page
router.get('/:id/edit', function(req, res){
    Post.findById(req.params.id, function(err, foundPost){
        if (err) {
            console.log(err)
        } else {
            res.render('posts/edit', {post: foundPost})
        }
    })
})
//UPDATE
router.put('/:id', function(req, res){
    Post.findByIdAndUpdate(req.params.id, req.body.post, function(err, updatedPost){
        if (err) {
            console.log(err)
        } else {
            res.redirect('/posts/' + req.params.id)
        }
    })
})
//DELETE ROUTE
router.delete("/:id", function(req, res){
    Post.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            console.log(err);
        } else {
            res.redirect('/posts')
        }
    })
})

    
module.exports = router;
    