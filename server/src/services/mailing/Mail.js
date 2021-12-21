var nodemailer = require('nodemailer');

Mail = function() {
	
	this.sendMail = function(mail){
		nodemailer.createTestAccount((err, account) => {
			var transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'wnevesky@gmail.com',
					pass: ''
				},
				secure: true
			});

			var mailOptions = {
				from: 'wnevesky@gmail.com',
				to: mail,
				subject: 'Recover Email',
				text: 'Link to recover your account'
			};

			transporter.sendMail(mailOptions, function(error, info){
				if (error) {
					 return error;
				} else {
					return 'Email sent: ' + info.response;
				}
			});
		})
	}
};

module.exports = Mail;