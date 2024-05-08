const UserRepository = require( '../repository/repo');
const User=require('../models/products')
const userRepository=new UserRepository(User)
class UserServices {
  async getAllUser() {
    const result = await userRepository.getAllUsers();
    return result;
  }

  async getUserById(id) {
    if(id==='fruits'||id==='vegetables'||id==='meats'){
      const result = await userRepository.filteredUsers({category:id});
    return result;
    }
    else{
      const result = await userRepository.filteredUsers({name:id});
      return result;
    }
    
    
  }
  async deleteUser(id){
    const result=await userRepository.deleteUser(id);
    return result; 
  }
  async createUser(data){
    const result1=await userRepository.checkUser(data.email);
    
    if(result1){
      return 'User Already Existed';
    }
    else{
      
      const result= await userRepository.createuser(data);
      return result;
    }
  }
  async updateUser(id, data){
    const result=await userRepository.updateUser(id, data);
    if(result){
      return result;
    }
    return;
  }
}
const services=new UserServices()
module.exports=services