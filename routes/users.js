var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../app/user/UserModel.js')
var UserController = require('../app/user/UserController.js')


/* GET /users listing. */
router.get('/', function(req, res, next) {
	UserController.getUsers(req, res);
	/*
	User.find(function (err, users) {
		if (err) return next(err);
		res.json(users);
	});*/
});

/* POST /users */
router.post('/', function(req, res, next) {
	UserController.postUsers(req, res);
	/*User.create(req.body, function (err, user) {
		if (err) return next(err);
		res.json(user);
	});*/
});

/* GET /user/id */
router.get('/:id', function(req, res, next) {
	User.findById(req.params.id, function (err, user) {
		if (err) return next(err);
		res.json(user);
	});
});

/* PUT /users/id */
router.put('/:id', function(req, res, next) {
	User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

/* DELETE /users/id */
router.delete('/:id', function(req, res, next) {
	User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;
