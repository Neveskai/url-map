import { request } from './fetch.js';

class User {
	
	static registerUser(url, user){
		return request(url, user, 'PUT').then(resp => console.log(resp));
	}
	
	static userAuth(url, login, senha){
		return request(url, { login: login, senha: senha }, 'POST').then(user => { return user; });
	}
	
	static recoverUser(url, user){
		return request(url, user, 'POST').then(resp => console.log(resp));
	}
	
}

export default User;