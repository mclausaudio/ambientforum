var express = require('express'),
    router = express.Router({mergeParams: true});
var Post = require("../models/post"),
    Comment = require("../models/comment");
    
var middlewareObj = require('../middleware/index');

//displays the new comment form
router.get('/new', middlewareObj.isLoggedIn, function(req, res){
    //find post in db 
    Post.findById(req.params.id, function(err, foundPost) {
        if (err) {
            console.log(err);
        } else {
            //if found render form
            res.render('../views/comments/new', {post: foundPost});
        }
    })
})
//POST route to add new comment to post
router.post('/', middlewareObj.isLoggedIn, function (req, res){
    //find post in db using id in params
    Post.findById(req.params.id, function(err, foundPost) {
        if (err) {
            console.log(err);
            res.redirect('/posts');
        } else {
            //once post found, create a new comment, using the info from form (req.body.comment)
            Comment.create(req.body.comment, function (err, newComment) {
                if (err) {
                    console.log(err);
                    res.redirect('/posts');
                } else {
                    //add username and id to the comment, author.id and author.username are from the schema, you'll want to set those to the current users info
                    newComment.author.id = req.user._id;
                    newComment.author.username = req.user.username;
                    newComment.save();
                    //push comment array onto the post we found earlier
                    foundPost.comments.push(newComment);
                    //save the updated post object and redirect
                    foundPost.save();
                    res.redirect('/posts/' + foundPost._id)
                }
            })
        }
    })
});

//Route to edit comment form
router.get('/:comment_id/edit', middlewareObj.checkCommentOwnership, function(req, res){
    Comment.findById(req.params.comment_id, function (err, foundComment){
        if (err) {
            console.log(err)
            res.redirect("/posts");
        } else {
            res.render('../views/comments/edit', {post_id: req.params.id, comment:foundComment});
        }
    })
    
})

router.put('/:comment_id', middlewareObj.checkCommentOwnership, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, foundComment){
        if (err) {
            console.log(err);
            res.redirect('back');
        } else {
            res.redirect('/posts/' + req.params.id);
        }
    })
});

router.delete('/:comment_id', middlewareObj.checkCommentOwnership, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function() {
        res.redirect('/posts');  
    })
})


module.exports = router;