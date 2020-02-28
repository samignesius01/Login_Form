const express=require('express')


const USER=require('../model/user')
const REG=require('../model/register')

const router=express.Router()



router.get('/getdetails',(req,res)=>{
      USER.find({},(err,document)=>{
          if(err)
            console.log(err);
            else
                res.send(document);
      }) 
})

router.get('/getregister',(req,res)=>{
    REG.find({},(err,document)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(document)
        }
    })
})



router.post('/insertdetails',(req,res)=>{
    const ur=new USER({
        username:req.body.username,
        password:req.body.password
    })
    ur.save((err,doc)=>{
        if(err)
        {
            console.log('error detected'+err);
        }
        else
        {
            res.send(doc);
        }
    })

})

router.post('/postregister',(req,res)=>{
    const re=new REG({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        mail:req.body.mail,
        phone:req.body.phone
    })
    re.save((err,doc)=>{
        if(err)
        {
            console.log('Error detected'+err)
        }
        else
        {
            res.send(doc);
        }
    })
})



module.exports=router;


