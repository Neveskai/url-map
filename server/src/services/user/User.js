const mysql = require('mysql');

User = function() {
	
	var randomString = function(len) {
		const characters = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var randomString = '';
		for (let i = 0; i < len; i++) {
			randomString += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return randomString;
	}
	
	this.userRegister = function(PDO, user) {
		return new Promise(function(resolve, reject) {
			PDO.query('SELECT idUser FROM users WHERE Login = '+mysql.escape(user.login), function(err, resp){
				if(err) reject(err);
				if(resp[0] != undefined) resolve('login já está em uso');
			});
			
			var sql = 'INSERT INTO users (Name, Email, Login, Keyword) VALUES ?';
			var values = [[user.name, user.email, user.login, user.keyword]];
			PDO.query(sql, [values], function(err, resp){
				if(err) reject(err);
				resolve(resp.insertId);
			});
		});
	}
	
	this.userAuth = function(PDO, auth) {
		return new Promise(function(resolve, reject) {
			const sql = 'SELECT idUser AS id, Name AS name FROM users WHERE Login = ? AND Keyword = ?';
			PDO.query(sql, [auth.login, auth.senha], function(err, resp){
				if(err) reject(err);
				var Token = randomString(55);
				PDO.query('UPDATE users SET Token = "'+Token+'" WHERE idUser = '+resp[0].id);
				resp[0].token = Token;
				resolve(resp[0]);
			});
		});
	}
	
	this.checkToken = function(PDO, token){
		return new Promise(function(resolve, reject) {
			const sql = 'SELECT idUser AS id, Name AS name FROM users WHERE Token = "'+token+'"';
			PDO.query(sql, function(err, resp){
				if(err) reject(err);
				resolve(resp[0]);
			});
		});
	}
};

module.exports = User;