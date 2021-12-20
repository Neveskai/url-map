import { createStore } from 'vuex'

export default createStore({
	state: {
		user: {},
		reqs: {
			login: null
		},
		api_dir: 'http://localhost:3001/api/v1'
	},
	mutations: {
		setObject(state, config){
			const target = config.target;
			const obj = config.data;
			if(Object.keys(obj).length !== 0){
				Object.entries(obj).forEach(function(key_val){
					state[target][key_val[0]] = obj[key_val[0]];
				});
			} else {
				state[target]
			}
		},
		setArray(state, config){
			const target = config.target;
			const arr = config.data;
			
			state[target] = arr;
		},
		setVal(state, config){
			const target = config.target;
			const val = config.data;
			
			state[target] = val;
		},
		updateObjAttr(state, config) {
			const target = config.target;
			const attr = config.attr;
			const val = config.data;
			
			state[target][attr] = val;
		}
	},
	actions: {
		
	},
	modules: {
		
	}
})
