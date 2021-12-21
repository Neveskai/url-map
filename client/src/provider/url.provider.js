import { request } from './fetch.js';

class Urls {
	
	static registerUrl(url, toshort){
		return request(url, toshort, 'PUT').then(resp => console.log(resp));
	}
	
	static deleteUrl(url, id){
		return request(url, id, 'DELETE').then(resp => console.log(resp));
	}
	
	static getMyUrls(url, userID){
		return request(url, userID, 'GET').then(resp => console.log(resp));
	}
	
}

export default Urls;