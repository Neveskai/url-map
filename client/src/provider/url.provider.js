import { request } from './fetch.js';

class Urls {
	
	static registerUrl(url, toshort){
		return request(url, { url: toshort }, 'PUT').then(resp => { return resp; });
	}
	
	static deleteUrl(url, id){
		return request(url, { id: id }, 'DELETE').then(resp => { return resp; });
	}
	
	static getMyUrls(url, userID){
		return request(url, { id: userID }, 'GET').then(resp => { return resp; });
	}
	
	static getUrl(url, shortUrl){
		return request(url+'/'+shortUrl, {}, 'GET').then(resp => { return resp; });
	}
	
}

export default Urls;