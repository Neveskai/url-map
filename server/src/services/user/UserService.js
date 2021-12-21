UserService = function(app) {
	var User = require('./User');
	var User = new User();

	app.put('/api/v1/user/register', function(req, res) {
		const PDO = app.get('PDO');
		const user = req.body;
		User.userRegister(PDO, user).then(resp => {
			res.send({ id: resp });
		})
	});
	
	app.post('/api/v1/user/auth', function(req, res) {
		const PDO = app.get('PDO');
		const auth = req.body;
		User.userAuth(PDO, auth).then(resp => {
			res.send(resp);
		})
	});
};

module.exports = UserService;