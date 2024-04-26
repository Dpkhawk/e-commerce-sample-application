const express=require('express')

const  {allProducts,deleteUsers} = require('../controllers/products-controller')
const  {allUsers,postUsers,updateUsers} = require('../controllers/login-controllers')
const {allCartProducts,deleteCartProducts,updateCartProducts,postCartProducts} = require('../controllers/cart-controller')
const allHistory = require('../controllers/order-controller')
const route=express.Router()
 route.get('/users/:id?',allProducts)
 route.delete('/users/:id',deleteUsers)
 route.get('/login/:id',allUsers)
route.post("/login",postUsers)
route.put('/login/:id',updateUsers)
route.get('/cart',allCartProducts)
route.post('/cart',postCartProducts)
route.delete('/cart/:id',deleteCartProducts)
route.put('/cart/:id',updateCartProducts)
route.get('/history',allHistory)
module.exports=route

