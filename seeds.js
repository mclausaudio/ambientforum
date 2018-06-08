var mongoose = require('mongoose'), 
    Post = require('./models/post.js');
    
var data = [
    {
        title:"Sample post title", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:'Lorem ipsum'
    }, {
        title:"Sample post title", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:'Lorem ipsum'
    }, {
        title:"Sample post title", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:'Lorem ipsum'
    }, {
        title:"Sample post title", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:'Lorem ipsum'
    }, {
        title:"Sample post title", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:'Lorem ipsum'
    }
]

function seedDB () {
    Post.remove({}, function(err){
        if(err) {
            console.log(err)
        } else {
            console.log("seeds cleared");
            
            data.forEach(function(seed){
                Post.create(seed, function(err, seedPost){
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('seed added')
                    }
                })
            })
        }
    })
}

module.exports = seedDB;