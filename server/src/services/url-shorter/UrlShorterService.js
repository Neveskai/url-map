UrlShorterService = function(app) {
	
	var Urls = require('./UrlShorter');
	var Urls = new Urls();

	app.put('/api/v1/url/register', function(req, res) {
		const PDO = app.get('PDO');
		const args = req.body;
		Urls.urlRegister(PDO, args).then( resp => {
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
	
	app.get('/api/v1/url/redirect/:short', function(req, res) {
		const PDO = app.get('PDO');
		const shortUrl = req.params.short;
		Urls.urlRedirect(PDO, shortUrl).then( resp => {
			res.send(resp);
		})
	});
}

module.exports = UrlShorterService;