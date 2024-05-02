
const Products = require("../models/products");

const allProducts = async(req, res) => {

  
  const id = req.params.id;
  if (id) {
    
    Products.find({ name: id }).then((data) => res.send(data));
    
  } else {

    const product=await Products.find()
    res.json(product)
  }
 
  // User.find().then((data) => res.send(data));
};
const deleteUsers = async (req, res) => {
  console.log(req.method);
  const users = await Products.findByIdAndDelete(req.params.id);
  res.json(users);
};
module.exports = { allProducts, deleteUsers };



