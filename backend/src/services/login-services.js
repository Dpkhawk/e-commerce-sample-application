const UserRepository = require( '../repository/repo');
const User=require('../models/logins')
const userRepository=new UserRepository(User)
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
class UserServices {
  async getAllUser() {
    const result = await userRepository.getAllUsers();
    return result;
  }

  async getUserById(id) {
    const {userName,password}=id
          const loginresult=await userRepository.getUserById(userName)
          const checkpassword=await bcrypt.compare(password,loginresult.password)
          if(checkpassword){
            const token = jwt.sign({ userId: userName }, 'your-secret-key', {
                expiresIn: '1h',
                })
            return token;
          }
          else{
            return null
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