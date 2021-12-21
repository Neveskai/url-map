export function request(url, object, method = 'GET'){
	var p = fetch(url, {
		method: method,
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(object)
	})
	.then(resp => resp.json())
	.then(resp => { 
		return resp; 
	})
	return p;
}