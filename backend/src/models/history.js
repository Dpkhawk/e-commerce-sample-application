const mongoose=require('mongoose')
const newSchema=new mongoose.Schema({
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
    },
    kgs:{
        type:Number
    },
    userName:{
        type:String
    },
    date:{
        type:Object
    }
})
const History=mongoose.model('history',newSchema)
module.exports=History