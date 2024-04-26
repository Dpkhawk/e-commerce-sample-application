const History = require("../models/history")

const allHistory=(req,res)=>{
    console.log('history');
    History.find().then(data=>res.send(data))
}
module.exports=allHistory