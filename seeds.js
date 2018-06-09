var mongoose = require('mongoose'), 
    Post = require('./models/post.js');
    
var data = [
    {
        title:"Sample post title 1", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:"If these lines aren't straight, your water's going to run right out of your painting and get your floor wet. You can't have light without dark. You can't know happiness unless you've known sorrow. It's a very cold picture, I may have to go get my coat. It’s about to freeze me to death. Don't fiddle with it all day. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. Let your heart be your guide. The least little bit can do so much. We don't have to be committed. We are just playing here. Let that brush dance around there and play. Let your imagination be your guide. So often we avoid running water, and running water is a lot of fun. Let's put some happy little bushes on the other side now. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. It's a good way of getting rid of all your anxieties and hostilities."
    }, {
        title:"Sample post title 2", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:"The least little bit can do so much. You're meant to have fun in life. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. I think there's an artist hidden in the bottom of every single one of us.  Fluff that up. What the devil. This painting comes right out of your heart. Do an almighty painting with us. Life is too short to be alone, too precious. Share it with a friend. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned."
    },    {
        title:"Sample post title 1", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:"If these lines aren't straight, your water's going to run right out of your painting and get your floor wet. You can't have light without dark. You can't know happiness unless you've known sorrow. It's a very cold picture, I may have to go get my coat. It’s about to freeze me to death. Don't fiddle with it all day. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. Let your heart be your guide. The least little bit can do so much. We don't have to be committed. We are just playing here. Let that brush dance around there and play. Let your imagination be your guide. So often we avoid running water, and running water is a lot of fun. Let's put some happy little bushes on the other side now. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. It's a good way of getting rid of all your anxieties and hostilities."
    }, {
        title:"Sample post title 2", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:"The least little bit can do so much. You're meant to have fun in life. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. I think there's an artist hidden in the bottom of every single one of us.  Fluff that up. What the devil. This painting comes right out of your heart. Do an almighty painting with us. Life is too short to be alone, too precious. Share it with a friend. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned."
    },     {
        title:"Sample post title 1", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:"If these lines aren't straight, your water's going to run right out of your painting and get your floor wet. You can't have light without dark. You can't know happiness unless you've known sorrow. It's a very cold picture, I may have to go get my coat. It’s about to freeze me to death. Don't fiddle with it all day. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. Let your heart be your guide. The least little bit can do so much. We don't have to be committed. We are just playing here. Let that brush dance around there and play. Let your imagination be your guide. So often we avoid running water, and running water is a lot of fun. Let's put some happy little bushes on the other side now. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. It's a good way of getting rid of all your anxieties and hostilities."
    }, {
        title:"Sample post title 2", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:"The least little bit can do so much. You're meant to have fun in life. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. I think there's an artist hidden in the bottom of every single one of us.  Fluff that up. What the devil. This painting comes right out of your heart. Do an almighty painting with us. Life is too short to be alone, too precious. Share it with a friend. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned."
    },     {
        title:"Sample post title 1", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:"If these lines aren't straight, your water's going to run right out of your painting and get your floor wet. You can't have light without dark. You can't know happiness unless you've known sorrow. It's a very cold picture, I may have to go get my coat. It’s about to freeze me to death. Don't fiddle with it all day. You can't make a mistake. Anything that happens you can learn to use - and make something beautiful out of it. Let your heart be your guide. The least little bit can do so much. We don't have to be committed. We are just playing here. Let that brush dance around there and play. Let your imagination be your guide. So often we avoid running water, and running water is a lot of fun. Let's put some happy little bushes on the other side now. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. It's a good way of getting rid of all your anxieties and hostilities."
    }, {
        title:"Sample post title 2", 
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEF8zL2rXO46O8JMTVGKdXRkzvw_b1-b9NmVe2wv8PhXmzXik',
        text:"The least little bit can do so much. You're meant to have fun in life. The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. I think there's an artist hidden in the bottom of every single one of us.  Fluff that up. What the devil. This painting comes right out of your heart. Do an almighty painting with us. Life is too short to be alone, too precious. Share it with a friend. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned."
    },  
    
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