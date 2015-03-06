// app/user/ProfileModel.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
	birthday: String,
	gender: String,
	lastModified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProfileModel', ProfileSchema);