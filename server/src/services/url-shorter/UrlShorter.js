const validUrl = require('valid-url');
const shortid = require('shortid');
const mysql = require('mysql');

UrlShorter = function() {
	
	var domain = 'http://localhost:8080';
	
	var checkCode = function(PDO, urlCode){
		return new Promise(function(resolve, reject) {
			PDO.query('SELECT idShort FROM shortener WHERE Short = "'+urlCode+'"', function(err, resp){
				if(err) reject(err);
				if(resp[0] != undefined) resolve(false);
				resolve(true);
			});
		});
	};
	
	var addCode = function(PDO, urlCode, url){
		return new Promise(function(resolve, reject) {
			var date = new Date(); 
			date.setDate(date.getDate() + 7);
			
			var sql = 'INSERT INTO shortener (Url, Short, expires) VALUES ?';
			var values = [[url, urlCode, date]];
			PDO.query(sql, [values], function(err, resp){
				if(err) reject(err);
				resolve(urlCode);
			});
		});
	};
	
	this.urlRegister = function(PDO, url) {
		return new Promise(async function(resolve, reject) {
			if (validUrl.isUri(url)) {
				var urlCode, valid = false;
				while(valid == false){
					urlCode = shortid.generate();
					await checkCode(PDO, urlCode).then(
						result => {
							if(result){
								valid = true;
								addCode(PDO, urlCode, url).then( _url => {
									resolve({ url: _url });
								})
							}
						}, 
						err => {
							valid = true;
							resolve({ error: 'Server Error!' });
						}
					);
				}
			} else {
				resolve({ error: 'Invalid URL'});
			}
		});
	}
	
	this.urlDelete = function(PDO, id) {
		return new Promise(function(resolve, reject) {
			resolve({ resp: id });
		});
	}
	
	this.urlRedirect = function(PDO, id) {
		return new Promise(function(resolve, reject) {
			resolve({ resp: id });
		});
	}
};

module.exports = UrlShorter;