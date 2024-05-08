class UserRepository {
  user = "";
  constructor(users) {
    this.user = users;
  }
  getAllUsers() {
    return this.user.find();
  }
  filteredUsers(condition){
     return this.user.find(condition)
  }
  getUserById(id) {
    return this.user.findById(id);
  }
  deleteUser(id) {
    return this.user.findByIdAndDelete(id);
  }
  createuser(data) {
    return this.user.create(data);
  }
  updateUser(id, data) {
    return this.user.findByIdAndUpdate(id, data);
  }
  checkUser(email) {
    return this.user.findOne({ email: email });
  }
}

module.exports = UserRepository;
