import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		theme: "white",
		token:uni.getStorageSync('token') || '',
		userInfo:uni.getStorageSync('userInfo')||{},
		quote:{},
		event:{},
	},
	mutations: {
		SET_THEME(state, value) {
			state.theme = value
		},
		login(state,info){
			state.token = info.userNumber
			state.userInfo = info.user
			uni.setStorageSync('token',info.userNumber)
			uni.setStorageSync('userInfo',info.user)
		},
		logout(state){
			state.token = ''
			state.userInfo = {}
			uni.removeStorageSync('token')
			uni.removeStorageSync('userInfo')
		},
		SET_QUOTE(state,value){
			//console.log(value)
			state.quote = value
		},
		SET_EVENT(state, value) {
			state.event = value
		}
	},
	actions: {
		setTheme({
			commit
		}, value) {
			commit('SET_THEME', value)
			uni.setStorageSync('theme',value)
		}
	},
	getters:{
		getTheme(state){
			return state.theme
		},
		getToken(state){
			return state.token
		},
		getUserInfo(state){
			return state.userInfo
		}
	}
})

export default store;
