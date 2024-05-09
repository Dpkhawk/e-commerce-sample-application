const express=require('express')
const jwt=require('jsonwebtoken')
const ProductController = require('../controllers-1/product-controller')
const users = require('../controllers-1/login-controller')
const CartController = require('../controllers-1/cart-controller')
const HistoryController = require('../controllers-1/history-controller')
const route=express.Router()
const products=new ProductController()
const cart=new CartController()
const history=new HistoryController()
const verifyToken=(req, res, next)=>{
const token = req.header('Authorization');
if (!token) return res.status(401).json({ error: 'Access denied' });
const tokens=token.slice(7,token.length)
try {
 const decoded = jwt.verify(tokens,'your-secret-key')
 req.userId = decoded.userId;
 next();
 } catch (error) {
    console.log(error);
 res.status(401).json({ error: 'Invalid token' });
 }
 };
 route.get('/users/:id?',products.getAllProducts)
 route.post("/logins",users.token)
route.get('/login/:id?',users.getAllUsers)
route.post("/login",users.postUsers);
route.put('/login/:id',users.updateUser)
route.get('/cart',verifyToken,cart.allCartProducts)
route.post('/cart',verifyToken,cart.createCartProducts)
route.delete('/cart/:id',cart.deleteCartProducts)
route.put('/cart/:id',cart.updateCartProducts)
route.get('/history',verifyToken,history.allHistories)
route.post('/history',history.postHistories)
module.exports=route

