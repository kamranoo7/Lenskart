
let express=require('express')
const { eyeModel } = require('../Models/Eyeglass.models.')
let eyeRouter=express.Router()

eyeRouter.post("/add",async(req,res)=>{
    let payload=req.body
    try{
        let newuser=new eyeModel(payload)
        await newuser.save()
            //res.send({mesg:"New user has been added "})
        res.status(200).send({msg:"new data has been added"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
  
})
eyeRouter.get("/",async(req,res)=>{
    let query=req.query
    try{
        let user= await eyeModel.find(query)
        res.status(200).send(user)
    }
   catch(err){
    res.status(400).send({"msg":err.message})
   }
})
eyeRouter.patch("/update/:userID",async(req,res)=>{
    let {ID}=req.params
    let payload=req.body
    try{
        await eyeModel.findByIdAndRemove({_id:ID},payload) 
        res.status(200).send(user)
    }catch(err){
       res.status(400).send({"msg":err.message}) 
      }
})
eyeRouter.delete("/delete/:userID",async(req,res)=>{
    let {ID}=req.params
    try{
await eyeModel.findByIdAndDelete({_id:ID})
   res.status(200).send({"msg":"data has been deleted"})
}catch(err){
        res.status(400).send({"msg":err.message})
    
    }
})
module.exports= {eyeRouter }