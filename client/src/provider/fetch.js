export const api_dir = 'http://localhost:3001/api/v1';
export const baseurl = 'http://localhost:8080';

export function request(url, object, method = 'GET'){
	var config;
	if(method == 'GET'){
		config = {
			method: method,
			mode: 'cors'
		};
	} else {
		config = {
			method: method,
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(object)
		};
	}
	var p = fetch(url, config)
	.then(resp => resp.json())
	.then(resp => { 
		return resp; 
	})
	return p;
}
