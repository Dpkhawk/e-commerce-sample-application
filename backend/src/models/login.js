const mongoose=require("mongoose")

const scheema=new mongoose.Schema({
    userName:{
        type:String
    },
    password:{
        type:String
    }
})
export default mongoose.Schema