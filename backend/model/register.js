const mongoose=require('mongoose')

const registerschema=mongoose.model('register',{
    firstname:{
        type:String,
        required:true
    },
    lastname:{ 
        type:String,
         required:true 
    },
    mail:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

module.exports=(registerschema)