const mysql = require('mysql');

UrlShorter = function() {
	
	this.urlRegister = function(PDO, user) {
		return new Promise(function(resolve, reject) {
			resolve('new URL');
		});
	}
	
	this.urlDelete = function(PDO, user) {
		return new Promise(function(resolve, reject) {
			resolve('delete URL');
		});
	}
	
	this.urlRedirect = function(PDO, auth) {
		return new Promise(function(resolve, reject) {
			resolve('redirect');
		});
	}
};

module.exports = UrlShorter;