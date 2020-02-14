const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String

});
module.exports = mongoose.model('User', UserSchema);
