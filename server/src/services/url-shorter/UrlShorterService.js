UrlShorterService = function(app) {
	
	var Urls = require('./UrlShorter');
	var Urls = new Urls();

	app.put('/api/v1/url/register', function(req, res) {
		const PDO = app.get('PDO');
		const args = req.body;
		Urls.urlRegister(PDO, args.url).then( resp => {
			res.send(resp);
		})
	});
	
	app.get('/api/v1/url/delete', function(req, res) {
		const PDO = app.get('PDO');
		const args = req.body;
		Urls.urlDelete(PDO, args).then( resp => {
			res.send(resp);
		})
	});
	
	app.get('/api/v1/url/redirect', function(req, res) {
		const PDO = app.get('PDO');
		const args = req.body;
		Urls.urlRedirect(PDO, args).then( resp => {
			res.send(resp);
		})
	});
}

module.exports = UrlShorterService;