MailService = function(app) {
	var Mail = require('./Mail');
	var Mail = new Mail();
	
	app.get('/api/v1/user/recover', function(req, res) {
		Mail.sendMail();
		res.send({resp: 'Email send'});
	});
};

module.exports = MailService;