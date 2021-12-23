import { request, api_dir } from './fetch.js';

class User {
	
	static registerUser(user){
		const url = api_dir + '/user/register';
		return request(url, user, 'PUT').then(resp => console.log(resp));
	}
	
	static userAuth(login, senha){
		const url = api_dir + '/user/auth';
		return request(url, { login: login, senha: senha }, 'POST').then(user => {
			if(user.error != undefined) return false;
			var exp_dt = new Date(); exp_dt.setMonth(exp_dt.getDate() + 1);
			document.cookie = "token="+user.token+"; path=/; expires=" + exp_dt.toUTCString();
			return user;
		});
	}
	
	static setUser(store, user){
		store.commit('setObject', { target: 'user', data: user });
		store.commit('updateObjAttr', { target: 'sync', data: true, attr: 'myurls' });
	}
	
	static getCookieToken(){
		var cookies = document.cookie;
		if (cookies != "") {
			var token = '';
			cookies = cookies.split(';');
			cookies.forEach(function(cookie){
				cookie = cookie.split('=');
				if(cookie[0].includes('token')) token = cookie[1];
			});
			return token;
		} else {
			return false;
		}
	}
	
	static checkLogin(token){
		const url = api_dir + '/user/token';
		return request(url, { token: token }, 'POST').then(user => { 
			if(user.id == undefined) return false;
			return user;
		});
	}
	
	static recoverUser(user){
		const url = api_dir + '/user/recover';
		return request(url, user, 'POST').then(resp => console.log(resp));
	}
	
	static logout(store){
		store.commit('setObject', { target: 'user', data: {id:0, name: ''} });
		document.cookie = 'token=; path=/; expires=0';
		return true;
	}
	
}

export default User;