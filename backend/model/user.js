const mongoose=require('mongoose')

const userschema=mongoose.model('user',{
    username :{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true}

})

module.exports=(userschema)