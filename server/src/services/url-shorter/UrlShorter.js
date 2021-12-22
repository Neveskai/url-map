const validUrl = require('valid-url');
const shortid = require('shortid');
const mysql = require('mysql');

UrlShorter = function() {
	
	var checkCode = function(PDO, urlCode){
		return new Promise(function(resolve, reject) {
			PDO.query('SELECT idShort FROM shortener WHERE Short = "'+urlCode+'"', function(err, resp){
				if(err) reject(err);
				if(resp[0] != undefined) resolve(false);
				resolve(true);
			});
		});
	};
	
	var addCode = function(PDO, urlCode, url, userID = false){
		return new Promise(function(resolve, reject) {
			var date = new Date(); 
			date.setDate(date.getDate() + 7);
			if(!userID){
				var sql = 'INSERT INTO shortener (Url, Short, expires) VALUES ?';
				var values = [[url, urlCode, date]];
			} else {
				var sql = 'INSERT INTO shortener (Url, Short, expires, users_idUser) VALUES ?';
				var values = [[url, urlCode, date, userID]];
			} 
			
			PDO.query(sql, [values], function(err, resp){
				if(err) reject(err);
				resolve(urlCode);
			});
		});
	};
	
	this.urlRegister = function(PDO, args) {
		var urlCode, valid = false;
		const url = args.url;
		const userID = args.userID != 0 ? args.userID : false;
		return new Promise(async function(resolve, reject) {
			if (validUrl.isUri(url)) {
				while(valid == false){
					urlCode = shortid.generate();
					await checkCode(PDO, urlCode).then(
						result => {
							if(result){
								valid = true;
								addCode(PDO, urlCode, url, userID).then( _url => {
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
	
	this.urlRedirect = function(PDO, urlCode) {
		return new Promise(function(resolve, reject) {
			PDO.query('SELECT Url AS url FROM shortener WHERE Short = "'+urlCode+'"', function(err, resp){
				if(err) reject(err);
				if(resp[0] != undefined) resolve(resp[0]);
				resolve({ error: 'Short not found' });
			});
		});
	}
};

module.exports = UrlShorter;