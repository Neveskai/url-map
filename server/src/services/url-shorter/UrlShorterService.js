UrlShorterService = function(app) {
	var Urls = require('./UrlShorter');
	var Urls = new Urls();

	app.put('/api/v1/url/register', function(req, res) {
		const PDO = app.get('PDO');
		const args = req.body;
		res.send(true);
	});
	
	app.delete('/api/v1/url/delete', function(req, res) {
		const PDO = app.get('PDO');
		const args = req.body;
		res.send(true);
	});
	
	app.get('/api/v1/url/redirect', function(req, res) {
		const PDO = app.get('PDO');
		const args = req.body;
		res.send(true);
	});
}

module.exports = UrlShorterService;