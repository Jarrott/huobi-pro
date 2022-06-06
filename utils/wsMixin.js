import {
	mapGetters,
	mapActions
} from 'vuex'
import Vue from 'vue'
import { wss, open } from "@/config/index.js"
import webSocket from "./ws.js"
import store from "@/store/index.js"
export default {
	data(){
		return{
			symbols:null, //websocket 订阅行情的
			lastTimes: {},
		}
	},
	onLoad() {
		if(Vue.$ws) return;
		Vue.$ws = webSocket.init(wss);
		Vue.$ws.connect();
	},
	onShow() {
		this.subscribe({
			"sub": `market.overview`,
		}, (data) => {
			console.log(888)
			this.$store.commit('setQuote', data)
		});
	},
	created(){
	},
	computed: {
	},
	watch:{
	},
	methods: {
		clearSubscribe(){
			// this.symbols = null
			Vue.$ws.clearSubscribe()
		},
		clearContract() {
			// this.contractList = []
			Vue.$ws.clearContract()
		},
		addToSubscribe(symbol){
			Vue.$ws.addToSubscribe(symbol)
		},
		subscribe(data, callback){
			Vue.$ws.subscribe(data, callback)
		},
	}
}
