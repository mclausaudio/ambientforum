var express = require('express'),
    router = express.Router({mergeParams:true}),
    passport = require('passport');
    
var User = require('../models/user');
    
//register view
router.get('/register', function(req, res){
    res.render('register');
});
//post to make new user
router.post('/register', function(req, res) {
    var newUser = new User({username: req.body.username});
    
    User.register(newUser, req.body.password, function(err, user){
        if (err) {
            console.log(err);
            res.redirect('/register');
        }
        passport.authenticate("local")(req, res, function() {
            res.redirect("/posts");
        })
    })
});
//login view
router.get('/login', function(req, res){
    res.render('login');
});
//login form submit
router.post('/login', passport.authenticate("local", 
    {
        successRedirect: '/posts',
        failureRedirect: '/login'
    }));
    
//logout route
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/posts');
})
    
    
module.exports = router;