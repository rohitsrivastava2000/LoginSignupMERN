const mongoose=require('mongoose');

const User=new mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('User',User);