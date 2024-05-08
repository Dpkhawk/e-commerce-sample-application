const services=require('../services/product-services')

class ProductController{
    async getAllProducts(req,res){
        if(!req.params.id){
        try{
        const result=await services.getAllUser();
        if(result){
            res.status(200).send(result)
        }
        else{
            res.status(400).send('Page Not Found')
        }
    }
    catch{
       res.status(500).send('Internal Server error')     
    }
        }
        else{
            try{
                const result=await services.getUserById(req.params.id);
                if(result){
                    res.status(200).send(result)
                }
                else{
                    res.status(400).send('Page Not Found')
                }
        }
        catch{
            res.status(500).send('Internal Server error')     
         }
    }
}
}
module.exports=ProductController;