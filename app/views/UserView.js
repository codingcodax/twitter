const User = require('./../models/User');

class UserView {
  static createUser(payload) {
    if (!payload) return { error: 'payload no existe' };

    const { id, username, name } = payload;

    if (!id || !username || !name)
      return { error: 'necesitan tener un valor valido' };

    return payload;
  }
}

module.exports = UserView;
