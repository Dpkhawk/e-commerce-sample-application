const Cart = require("../models/cart")

const allCartProducts=(req,res)=>{
    Cart.find().then((data)=>res.send(data))
}
const deleteCartProducts=(req,res)=>{
    Cart.findByIdAndDelete(req.params.id).then(()=>res.send('deleted successfully'))
}
const updateCartProducts=async (req,res)=>{
    Cart.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((data)=>res.send(data))
}
const postCartProducts=(req,res)=>{
    const{_id,name,src,price,discount,category,kgs,userName}=req.body
    Cart.create({name,src,price,discount,category,kgs,userName}).then(()=>res.send('Added Successfully'))
}
module.exports={allCartProducts,deleteCartProducts,updateCartProducts,postCartProducts}