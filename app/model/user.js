'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    id: {
      type: String
    },
    account: {
      type: String,
    },
    password: {
      type: String,
    },
    username: {
      type: String,
    }
  }, {
    versionKey: false,
  });
  return mongoose.model('User', UserSchema, 'user');
};
