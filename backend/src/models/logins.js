const mongoose=require('mongoose')


const useSchema=new mongoose.Schema({
   
    UserName:{
        type:String
    },
    email:{
        type:String
    },
    dob:{
        type:String
    },
    mobileNumber:{
        type:Number
    },
    gender:{
        type:String
    },
    password:{
      type:String
    },
    zipcode:{
        type:String
    },
    district:{
        type:String
    }
})
const Login=mongoose.model('Login',useSchema)
module.exports=Login

