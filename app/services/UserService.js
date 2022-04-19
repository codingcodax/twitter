const User = require('./../models/User');

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, 'Sin bio');
  }

  static getInfo = (user) => Object.values(user).map((userValue) => userValue);

  static updateUserUsername = (user, newUsername) => {
    user.username = newUsername;
    return user;
  };

  static getAllUsernames = (users) => users.map((user) => user.username);
}

module.exports = UserService;
