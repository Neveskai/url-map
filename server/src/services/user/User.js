const mysql = require('mysql');

User = function() {
	
	this.fetchAllUsers = function() {
		return this.users;
	};
	
	this.fetchAllPits = function(JDO, type) {
		return new Promise(function(resolve, reject) {
			JDO.query('SELECT * FROM PIT WHERE Tipo_idTipo = '+ mysql.escape(type), function(err, resp){
				if(err) reject(err);
				resolve(resp);
			});
		});
	}
};

module.exports = User;