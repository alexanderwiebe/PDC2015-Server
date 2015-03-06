// app/user/UserModel.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	email: String,
	lastModified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserModel', UserSchema);