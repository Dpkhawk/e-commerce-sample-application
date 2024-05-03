const services=require('../services/cart-services')
class CartController{
   async allCartProducts(req,res){
    try{
        if(req.params.id){
            const result=await services.getUserById(req.params.id)
            if(result){
                res.status(200).send(result)
            }
            else{
                res.status(404).send('Not Found')
            }
        }
        else{
            const result=await services.getAllUser()
            if(result){
                res.status(200).send(result)
            }
            else{
                res.status(404).send('Not Found')
            }
        }
    }
    catch{
        res.send(500).send('Internal Server Error')
    }
   }
   async createCartProducts(req,res){
     try{
        console.log('hello');
        const result=await services.createUser(req.body)
        if(result){
            res.status(200).send(result)
        }
        else{
            res.status(404).send('Not Found')
        }
     }
     catch{
        res.status(404).send('Not Found')
     }
   }
   async updateCartProducts(req,res){
    try{
       const result=await services.updateUser(req.params.id,req.body)
       if(result){
        res.status(200).send(result);
       }
       else{
        res.status(404).send('User Not Found');
       }
    }
    catch{
      res.status(500).send('Internal Server Error')
    }
   }
   async deleteCartProducts(req,res){
    try{
        const result=await services.deleteUser(req.params.id)
        if(result){
         res.status(200).send(result);
        }
        else{
         res.status(404).send('User Not Found');
        }
     }
     catch{
       res.status(500).send('Internal Server Error')
     }
   }
}
module.exports=CartController