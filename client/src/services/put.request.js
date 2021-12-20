export function put(url, object){
	var p = fetch(url, {
		method: 'POST',
		headers: {
			'X-Http-Method-Override': 'PUT', 
			'Content-Type': 'application/json' 
		},
		body: JSON.stringify(object)
	})
	.then(resp => resp.json())
	.then(resp => { 
		return resp; 
	})
	return p;
}