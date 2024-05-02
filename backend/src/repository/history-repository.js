const  User=require('../models/history')

class UserRepository {
  async getAllUsers() {
    const result = await User.find();
    return result;
  }

  async getUserById(id) {
    
    const result = await User.findById(id);

    return result;
  }
  async deleteUser(id){
    const result= await User.findByIdAndDelete(id);
    return result;
  }
  async createuser(data){
    
    const result=await User.create(data);
    return result;
  }
  async updateUser(id, data){
    
    const result=await User.findByIdAndUpdate(id, data);
    return result;
  }
  async checkUser(email){
    
    const result=await User.findOne({ email:email });
    return result;
  }
}
const repo=new UserRepository()
module.exports=repo;