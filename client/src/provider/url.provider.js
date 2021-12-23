import { request, api_dir } from './fetch.js';

class Urls {
	
	static registerUrl(toshort, userID){
		const url = api_dir +'/url/register';
		return request(url, { url: toshort, userID: userID }, 'PUT')
		.then(resp => { 
			return resp; 
		});
	}
	
	static deleteUrl(id){ 
		const url = api_dir + '/url/delete';
		return request(url, { id: id }, 'DELETE')
		.then(resp => { 
			return resp; 
		});
	}
	
	static getMyUrls(store, userID){
		const url = api_dir +'/url/myurls/'+ userID;
		return request(url, {}, 'GET')
		.then(resp => {
			if(resp.error != undefined) return false;
			store.commit('updateObjAttr', { target: 'tablemyurls', data: resp, attr: 'data' });
			return resp;
		});
	}
	
	static getTopUrls(store){
		const url = api_dir + '/url/topurls';
		return request(url, {}, 'GET')
		.then(resp => {
			if(resp.error != undefined) return false;
			store.commit('updateObjAttr', { target: 'tabletopurls', data: resp, attr: 'data' });
			return resp;
		});
	}
	
	static getUrl(shortUrl){
		const url = api_dir +'/url/redirect/'+ shortUrl;
		return request(url, {}, 'GET')
		.then(resp => { 
			return resp; 
		});
	}
	
}

export default Urls;