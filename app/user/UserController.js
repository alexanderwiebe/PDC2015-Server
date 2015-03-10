// Load required packages
var UserModel = require('./UserModel');

// Create endpoint /api/users for POST
exports.postUsers = function(req, res) {
  //res.json({ message: 'not a 404'});

  var user = new User({
    username: req.body.username,
    password: req.body.password
  });

  /*user.save(function(err) {
    if (err)
      res.send(err);*/
//});
    res.json({ message: 'New beer drinker added to the locker room!' });
  //});
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
      res.json({ message: 'New beer drinker added to the locker room!' });

  /*User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });*/
};