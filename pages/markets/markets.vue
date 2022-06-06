<template>
	<view>
		<v-tabs v-model="current" :tabs="quotes.map(item =>item.toUpperCase())" @change="changeTab" :scroll="false"
			:lineAnimation="false" height="40px" lineHeight="2px" class="top-tab"></v-tabs>
		<view v-for="item in list" :key="item.symbol_code">

			{{item.symbol_code}}
		</view>
	</view>
</template>

<script>
	import {
		getGriddingSymbols,
		getCommonSymbls,
	} from '@/api/markets.js';
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				current: 0,
				quotes: ["usdt", "husd", "usdc", "btc", "eth", "ht", "usdd","flat" ],
				list: [],
			}
		},
		computed: {
			quotesList() {
				console.log(this.$store.state.quotes)
				return this.$store.state.quotes;
			}
		},
		onLoad() {
			console.log()
			// getGriddingSymbols().then(res => {
			// 	const {
			// 		code,
			// 		data
			// 	} = res;
			// 	if (code === 200) {
			// 		const {
			// 			quotes,
			// 			symbols
			// 		} = data;
			// 		this.quotes = quotes;
			// 		symbols.forEach(item => {
			// 			console.log(item)
			// 			if (item.quote_currency == 'usdt') {
			// 				this.list.push(item)
			// 			}
			// 		})
			// 		console.log(this.list)
			// 	}
			// });
			getCommonSymbls().then(res=>{
				if (res.code==200) {
					res.data.forEach(item => {
						console.log(item)
						if (item.quote_currency == 'usdt') {
							this.list.push(item)
						}
					})
				}
			});
			
			this.subscribe({
				"sub": `market.overview`,
			}, (tick) => {
				console.log(tick)
			});
		},
		methods: {
			changeTab(index) {
				this.current = index;
			}
		}
	}
</script>

<style>

</style>
