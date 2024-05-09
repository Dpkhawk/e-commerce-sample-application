const UserRepository = require( '../repository/repo');
const User=require('../models/history')
const userRepository=new UserRepository(User)

class UserServices {
  async getAllUser() {
    const result = await userRepository.getAllUsers();
    return result;
  }

  async getUserById(id) {
    const result = await userRepository.filteredUsers({userName:id});
    return result;
  }
  async deleteUser(id){
    const result=await userRepository.deleteUser(id);
    return result; 
  }
  async createUser(data){
   
      
      const result= await userRepository.createuser(data);
      return result;
    
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