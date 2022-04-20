const User = require('./../models/User');

class UserView {
  static createUser(payload) {
    if (!payload) return { error: 'payload no existe' };

    return payload;
  }
}

module.exports = UserView;
