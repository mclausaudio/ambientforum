var express = require('express'),
    router = express.Router({mergeParams:true}); 
    
var Post = require('../models/post.js');

var middlewareObj = require('../middleware/index');

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
router.post('/', middlewareObj.isLoggedIn, function(req, res){
    req.body.text = req.sanitize(req.body.text);
    
    var title = req.body.title,
        image = req.body.image,
        text = req.body.text,
        author = {
            id: req.user._id,
            username: req.user.username
        };
    var newPost = {title: title, image: image, text: text, author: author};
    Post.create(newPost, function(err, newlyCreated){
        if (err) {
            console.log(err)
            res.redirect("back");
        } else {
            console.log(newlyCreated);
            res.redirect('/posts')
        }
    })
})

// NEW ROUTE - takes to page with create new post form
router.get("/new", middlewareObj.isLoggedIn, function (req, res){
    res.render('../views/posts/new');
});
// SHOW ROUTE - show individual post view
router.get("/:id", function(req, res){
    Post.findById(req.params.id).populate('comments').exec(function(err, post){
        if (err) {
            console.log(err)
        } else {
            res.render('../views/posts/show', {post:post});    
        }
    })
});

//EDIT - this takes you to the edit page
router.get('/:id/edit', middlewareObj.checkPostOwnership, function(req, res){
    Post.findById(req.params.id, function(err, foundPost){
        if (err) {
            console.log(err)
        } else {
            res.render('posts/edit', {post: foundPost})
        }
    })
})
//UPDATE
router.put('/:id', middlewareObj.checkPostOwnership, function(req, res){
    req.body.post.text = req.sanitize(req.body.post.text);
    Post.findByIdAndUpdate(req.params.id, req.body.post, function(err, updatedPost){
        if (err) {
            console.log(err)
        } else {
            res.redirect('/posts/' + req.params.id)
        }
    })
})
//DELETE ROUTE
router.delete("/:id", middlewareObj.checkPostOwnership,  function(req, res){
    Post.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            console.log(err);
        } else {
            res.redirect('/posts')
        }
    })
})

    
module.exports = router;
    