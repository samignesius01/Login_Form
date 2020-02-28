const express =require ('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cors=require('cors')
const route = require('../backend/Routes/Routes');

const app=express()

app.use(bodyparser.json())

app.listen(3000,()=>{
    console.log('server started successfully');
})

app.use('/user',route);

mongoose.connect('mongodb://localhost:27017/Test',{ useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
       if(!err)
       {
           console.log('DB connected')
       }
       else
       {
           console.log("Error in DB Connection"+JSON.stringify(undefined,err,2));
       }
})