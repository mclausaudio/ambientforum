var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    title:String, 
    image:String,
    text:String
});

module.exports = mongoose.model("Post", postSchema);