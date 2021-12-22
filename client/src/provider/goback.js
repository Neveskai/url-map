export function goBack(router){
	if(window.history.length == 0){
		router.push({ path: 'home' });
	} else {
		router.go(-1);
	}
}