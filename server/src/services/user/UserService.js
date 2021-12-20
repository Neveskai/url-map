UserService = function(app) {
	var User = require('./User');
	var User = new User();

	app.put('/api/v1/user/auth', function(req, res) {
		const user = { id: 1, name: 'Wendell', email: 'wnevesky@gmail.com' }
		res.send(user);
	});
};

module.exports = UserService;