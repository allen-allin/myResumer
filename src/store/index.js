import Vue from 'vue'
import Vuex from 'vuex'
 	

Vue.use(Vuex)


const state = {	
	selected: 'profile',
	resume: {
		config: [
			{field:'profile',icon: 'id'},
			{field:'workHistory',icon: 'work'},
			{field:'education',icon: 'book'},
			{field:'projects',icon: 'heart'},
			{field:'awards',icon: 'cup'},
			{field:'contacts',icon: 'phone'}
		],
		profile: {
			 name: '',
			 city: '',
			 title: '',
			 birthday: '',
			 name: '',
		},
		workHistory: [
			{company:'',content:''},
			{company:'',content:''}
		],
		education: {
			 school: '',
			 specialty: ''
			},
		projects: [
			{project:'',content:''},
			{project:'',content:''},
			{project:'',content:''}
		],
		awards: [
			{name:'',content:''},
			{name:'',content:''}
		],
		contacts: [
			{contact:'phone',content:''},
			{contact:'mail',content:''}
		],
		others: ''
	}
			
}

const mutations = {
	switchTab(state,payload) {
		state.selected = payload;
	}
}


export default new Vuex.Store({
	state,mutations
})