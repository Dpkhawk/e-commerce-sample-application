
const  mongoose  = require("mongoose");

const useSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    src:{
        type:String
    },
    price:{
        type:Number
    },
    discount:{
        type:Number
    },
    category:{
      type:String
    }
})
const Products=mongoose.model('Product',useSchema)
module.exports=Products

