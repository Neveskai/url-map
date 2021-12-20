const mysql = require('mysql');

var JDO = mysql.createConnection({
	host    : 'http://localhost/phpmyadmin/',
	user    : 'root',
	password: '',
	database: 'urlshorter'
});

module.exports = JDO;