const services=require('../services/login-services')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
class LoginController{
    async getAllUsers(req,res){
        try{
            
          if(req.params.id){
            const result=await services.getUserById(req.params.id)
            if(result){
                res.status(200).send(result)
            }
            else{
                res.status(400).send('User Not Found')
            }
          }  
          else{
            const result=await services.getAllUser();
            if(result){
                res.status(200).send(result)
            }
            else{
                res.status(400).send('Page Not Found')
            }
          }    
    }
    catch{
       res.status(500).send('Internal Server error')     
    }}
    async postUsers(req,res){
        try{
           const result=await services.createUser(req.body)
           if(result){
            res.status(201).send('Created Successfully')
           }
           else{
            res.status(401).send('UnAuthorized')
           }
        }
        catch{
           res.status(500).send('Internal Server Error')
        }
    }
    async token(req,res){
        try{
          
          const result=await services.getUserById(req.body)
          if(result){
            res.status(200).send(result);
          }
          else{
             res.status(404).send('User Not Found');
          }
        }
        catch{
           res.status(500).send("Internal Server Error");
        }
    }
    async updateUser(req,res){
        try{
            const result=await services.updateUser(req.params.id,req.body)
            if(result){
             res.status(200).send('Updated Successfully')
            }
            else{
             res.status(401).send('UnAuthorized')
            }
        }
        catch{
            res.status(500).send('Internal Server Error')
        }
    }
    
}
const users=new LoginController()
module.exports=users;