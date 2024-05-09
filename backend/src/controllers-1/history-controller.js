const services=require('../services/history-services')
class HistoryController{
    async allHistories(req,res){
        try{
         const result=await services.getUserById(req.userId)
         if(result){
            res.status(200).send(result)
         }
         else{
            res.status(404).send("Not Found")
         }
        }
        catch{
         res.status(500).send('Internal Server Error')
        }
    }
    async postHistories(req,res){
        try{
         const result=await services.createUser(req.body)
         if(result){
            res.status(200).send(result)
         }
         else{
            res.status(404).send("Not Found")
         }
        }
        catch{
         res.status(500).send('Internal Server Error')
        }
    }
}
module.exports=HistoryController