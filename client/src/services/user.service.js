const User = function() {

	this.id = 0;
	this.name = '';
	this.email = '';
	
	this.userAuth = function(url, login, senha){
		const req = { 
			login: login, 
			senha: senha 
		};
		const p = fetch(url, {
			method: 'POST',
			body: JSON.stringify(req)
		})
		.then(resp => resp.json())
		.then(user => this.createUser(user));
		return p;
	}
	
	this.logout = function(){
		this.id = 0;
		this.name = '';
		this.email = '';
	}
	
	this.createUser = function(arr) {
		this.id = arr.id;
		this.name = arr.name;
		this.email = arr.email;
	}

}

export default User;