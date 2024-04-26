const Login=require('../models/logins')

const allUsers=async(req,res)=>{
    const name=req.params.id
    // console.log('hi');
    if(name){
         Login.find({UserName:name})
        .then(data=>res.send(data))
    }
    else{
        res.send('user not found')
    }
    
  
}
const postUsers=(req,res)=>{
   
   const{UserName,email,dob,mobileNumber,gender,address,password,zipcode,district}=req.body
    Login.create({UserName,email,dob,mobileNumber,gender,address,password,zipcode,district})
    .then(data=>res.send('User added successfully'))
}
const updateUsers=(req,res)=>{
    Login.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(()=>res.send('updated successfully'))
}
module.exports={allUsers,postUsers,updateUsers}
