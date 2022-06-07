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
		setQuote(state,data){
			let quote = {...state.quote};
			data.forEach(item=> {
				quote[item.symbol] = item
			})
			state.quote = {...quote};
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
		},
		updateQuote({commit}, value) {
			commit('setQuote', value)
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
