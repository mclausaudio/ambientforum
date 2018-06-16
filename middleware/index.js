var Post = require("../models/post"),
    Comment = require("../models/comment");
    
var middlewareObj = {};

//checks if current user is owner of post
middlewareObj.checkPostOwnership = function(req, res, next){
    //if a user is logged in
    if (req.isAuthenticated()) {
        //find the post
        Post.findById(req.params.id, function(err, foundPost){
            if (err) {
                res.redirect("back"); //takes user back to previous page
            } else {
                // is the current user the same as the post owner?
                // can not compare foundPost.author.id and req.user._id because 
                // .id returns OBJECT with id and ._id returns STRING with id
                // must use the .equals method, which is built into mongoose and compares the two.
                if (foundPost.author.id.equals(req.user._id)) {
                    next(); //move onto the rest of the route code
                } else {
                    res.redirect("back")
                }
            }
        });        
    } else {
        res.redirect("back"); //takes user back to previous page
    }
};

//checks if current user is owner of comment
middlewareObj.checkCommentOwnership = function(req, res, next){
    //checks if there is a current user
    if (req.isAuthenticated()) {
        //if so, find the comment using the ID sorted in the req.params
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if (err) {
                console.log(err)
                res.redirect('back')
            //check if the comment that was found has the same author ID as current user using .equals, NOT '===' or '=='        
            } else {
                if (foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    res.redirect('back');
                }
            }
        });
    } else {
        res.redirect('back');
    }
}


//checks if user is logged in
middlewareObj.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
};

module.exports = middlewareObj;