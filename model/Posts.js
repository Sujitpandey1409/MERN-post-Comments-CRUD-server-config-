const mongoose = require('mongoose');

const posts = mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    caption:{
        type:String,
        require:true
    },
    comment:{
        type:Array
    }
})

module.exports=mongoose.model('posts',posts)