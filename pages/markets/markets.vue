<template>
	<view>
		<view class="status-bar"></view>
		<uni-nav-bar title="Login" leftWidth="0">
			<view class="flex nav">
				<view class="item">Favorites</view>
				<view class="item active">Spot</view>
				<view class="item">Derivates</view>
				<view class="item">News</view>
			</view>
		</uni-nav-bar>
		<v-tabs v-model="current" :tabs="quotes.map(item =>item.text.toUpperCase())" @change="changeTab" :scroll="false"
			:lineAnimation="false" height="32px" lineHeight="2px" class="top-tab"></v-tabs>
		<list :list="currentList" :type="quotes[current].type||[]"></list>
	</view>
</template>

<script>
	import {
		getGriddingSymbols,
		getCommonSymbls,
	} from '@/api/markets.js';
	import List from './components/usdt-list';
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				current: 0,
				quotes: [{
					text: "usdt",
					type: ['All', 'Layer2', 'Metaverse', 'NFT', 'Storage', 'ETP', 'HECO', 'DeFi', 'Grayscale',
						'Inno',
						'Polkadot', 'gaming', 'web3', 'meme', 'DAO', 'Arbitrum', 'SOL', 'Fantom', 'AVAX',
						'Cosmos', 'Near'
					],
				}, {
					text: "husd",
					type: ['All', 'DeFi']
				}, {
					text: "usdc"
				}, {
					text: "btc",
					type: ['All', 'NFT', 'Metaverse', 'Polkadot', 'DeFi']
				}, {
					text: "eth",
					type:['All', 'Metaverse', 'Polkadot', 'DeFi']
				}, {
					text: "ht",
					type:['All','Metaverse']
				}, {
					text: "usdd",
				}, {
					text: "flat"
				}],
				list: [],
				usdt: [],
				husd: [],
				usdc: [],
				btc: [],
				eth: [],
				ht: [],
				usdd: [],
				flat: [],
				partitions: 'ETP',
			}
		},
		components: {
			List,
		},
		computed: {
			currentList() {
				let list = this[this.quotes[this.current].text];
				let arr =[]
				list.forEach(item => {
					let quote = this.$store.state.quote[item.symbol_code];
					if (quote) {
						item.price = quote.close;
						item.upAndDown = ((quote.close - quote.open) / quote.open * 100).toFixed(2);
						item.vol = quote.vol;
						arr.push(item)
					}
					
				})
				return arr;
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

			// 		})
			// 		console.log(this.list)
			// 	}
			// });
			getCommonSymbls().then(res => {
				if (res.status == 'ok') {
					res.data.forEach(item => {
						if (item.partitions) {}
						if (this[item.quote_currency]) {
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
	/deep/.v-tabs__container {
		&:after {
			content: " ";
			width: 200%;
			height: 200%;
			position: absolute;
			top: 0;
			left: 0;
			border-bottom: 1px solid rgba(0, 0, 0, .2);
			-webkit-transform: scale(.5);
			transform: scale(.5);
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			box-sizing: border-box;
		}
	}
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
	.nav {
		font-size: 15px;
		font-weight: 500;
		color: #999;
		margin-left: -16px;
		.item {
			padding: 8px;
			&.active {
				color: #494949;
				font-size: 16px;
			}
		}
		
	}
</style>
