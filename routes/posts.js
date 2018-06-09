var express = require('express'),
    router = express.Router({mergeParams:true});
    
var Post = require('../models/post.js');
    
  
  
  
  console.log("hello from posts.js");
  
router.get("/", function(req, res){
    Post.find({}, function (err, Posts){
        if (err) {
            console.log(err)
        } else {
            res.render("posts/index", {posts:Posts});
        }
    })
})

router.get("/:id", function(req, res){
    Post.findById(req.params.id, function(err, post){
        if (err) {
            console.log(err)
        } else {
            res.render('../views/posts/show', {post:post});    
        }
    })
});
     

router.get("/test", function (req, res){
    res.send('test test');
})
    
module.exports = router;
    