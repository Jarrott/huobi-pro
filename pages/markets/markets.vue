<template>
	<view>
		<v-tabs v-model="current" :tabs="quotes.map(item =>item.toUpperCase())" @change="changeTab" :scroll="false"
			:lineAnimation="false" height="40px" lineHeight="2px" class="top-tab"></v-tabs>
		<view class="list">
			<view class="flex i-title">
				<view class="text">
					Name
				</view>
				<view class="text">
					Last Price
				</view>
				<view class="text">
					24 Chg%
				</view>
			</view>
			<view v-for="item in currentList" :key="item.symbol_code" class="flex">
				<view class="text">
					<view>
						<text class="ft-14">{{item.display_name.split('/')[0]}}</text><text
							class="ft-12 gray">/{{item.display_name.split('/')[1]}}</text>
					</view>
					<view class="ft-12 gray">
						{{item.vol}}
					</view>
				</view>
				<view class="text ft-12">
					{{item.price}}
				</view>
				<view class="text">
					<button :class="['btn', 'ft-12', 
						{'btn-up': item.upAndDown> 0}, 
						{'btn-down': item.upAndDown<=0}] ">
						{{item.upAndDown}}%
					</button>

				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		getGriddingSymbols,
		getCommonSymbls,
	} from '@/api/markets.js';
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				current: 0,
				quotes: ["usdt", "husd", "usdc", "btc", "eth", "ht", "usdd", "flat"],
				list: [],
				usdt: [],
				husd: [],
				usdc: [],
				btc: [],
				eth: [],
				ht: [],
				usdd:[],
				flat: [],
			}
		},
		computed: {
			currentList() {
				let list = this[this.quotes[this.current]];
				list.forEach(item => {
					let quote = this.$store.state.quote[item.symbol_code];
					if (quote) {
						item.price = quote.close;
						item.upAndDown = ((quote.close - quote.open) / quote.open * 100).toFixed(2);
						item.vol = quote.vol;
					}

				})
				return list;
			}
		},
		onLoad() {
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
			getCommonSymbls().then(res => {
				if (res.status == 'ok') {
					res.data.forEach(item => {
						if (	this[item.quote_currency]) {
							this[item.quote_currency].push(item)
						} else {
							this[item.quote_currency] = [];
								this[item.quote_currency].push(item)
						}
						
					})
				}
			});

		},
		methods: {
			changeTab(index) {
				this.current = index;
				
			}
		}
	}
</script>

<style lang="scss">
	.list {
		padding: 16px;
		background: #fff;
	}

	.l-item {
		text-transform: uppercase;
		line-height: 40px;
		line-height: 40px;
	}

	.ft-14 {
		font-size: 14px;
	}

	.blod {
		font-weight: 500;
	}

	.ft-12 {
		font-size: 10px;
	}

	.gray {
		color: rgb(180, 180, 180);
	}

	.btn {
		width: 68px;
		height: 28px;
		line-height: 28px;
		padding: 0;
		border: none;
		border-radius: 0;

		&:after {
			display: none;
		}
	}

	.btn-down {
		background: rgb(162, 51, 74);
	}

	.btn-up {
		background: rgb(96, 170, 142);
	}

	.btn-vol {
		background: rgb(237, 242, 249);
		color: rgb(55, 97, 218);
	}

	.i-title {
		font-size: 12px;
		color: rgb(180, 180, 180);

		position: relative;
	}

	.screenList {
		background: #fff;
		position: absolute;
		padding: 12px;
		top: 22px;
		left: 0;
		right: 0;
		z-index: 999;
		display: grid;
		grid-gap: 12px 12px;
		grid-template-columns: repeat(3, 31.6%);
		flex-wrap: wrap;
		align-items: center;
		align-content: space-between;

		.s-item {
			padding: 4px 0;
			background: rgb(247, 247, 251);
			text-align: center;

		}
	}

	.flex {
		align-items: center;

		.text {
			&:nth-child(3n+1) {
				flex: 1;

			}

			&:nth-child(3n+2) {
				width: 80px;
				text-align: left;
			}

			&:nth-child(3n) {
				width: 80px;
				margin-left: 12px;
				text-align: right;
			}
		}
	}
</style>
