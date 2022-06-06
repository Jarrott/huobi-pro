<template>
	<view>
		<view class="status-bar" style="background-color: #0c1723"></view>
		<uni-nav-bar left-icon="arrow-left" @clickLeft="leftClick" leftWidth="40rpx" backgroundColor="#0c1723" color="#fff">
			<view class="nav-title flex">
				<uni-icons custom-prefix="iconfont" type="icon-zhankai" color="#fff" size="24"></uni-icons>{{symbol.toUpperCase()}}
			</view>
			
			<!-- <view v-slot:right>
				<uni-icons custom-prefix="iconfont" type="icon-shoucang" color="#fff" size="24"></uni-icons>
				<uni-icons custom-prefix="iconfont" type="icon-fenxiang" color="#fff" size="24"></uni-icons>
			</view> -->
			
		</uni-nav-bar>
		<v-tabs v-model="current" :tabs="tabs" @change="changeTab" :scroll="false" :lineAnimation="false" height="40px"
			lineHeight="2px" bgColor="#161f2f" color="#7286a5" class="top-tab"></v-tabs>
		<view v-if="current===0">
			<view class="flex detail" v-if="detail.close">
				<view class="flex-1">
					<view class="price down">{{detail.close| price}}</view>
					<view class="price-two">≈¥{{detail.close}}<text
							class="down">{{((detail.close-detail.open)/detail.open*100).toFixed(2)}}%</text></view>
				</view>
				<view>
					<view class="flex">
						<view class="field">
							<view class="title">24HH</view>
							<view class="value">{{detail.high|price}}</view>
						</view>
						<view class="field">
							<view class="title">24HVol.({{symbol}})</view>
							<view class="value">{{(detail.amount/1000000000).toFixed(2)}}B</view>
						</view>
					</view>
					<view class="flex">
						<view class="field">
							<view class="title">24HL</view>
							<view class="value">{{detail.low|price}}</view>
						</view>
						<view class="field">
							<view class="title">24HAmt.</view>
							<view class="value">{{(detail.vol/1000000).toFixed(2)}}M</view>
						</view>
					</view>
				</view>
			</view>
			<hq-chart :symbol="symbol" />
			<v-tabs v-model="type" :tabs="orderTabs" @change="changeOrderTab" :scroll="false" :lineAnimation="false"
				height="40px" lineHeight="2px" bgColor="#161f2f" color="#7286a5"></v-tabs>
			<view v-if="type==0">
				<view class="flex list-title">
					<view>Buy Amount</view>
					<view class="flex-1">Price(USDT)</view>
					<view>Amount Sell</view>
				</view>
			
				<view class="flex tick">
					<view class="flex-1 bids">
						<view v-for="(item, index) in bidsList" :key="item[0]">
							<view class="flex item " :style="{backgroundSize: `${item.width}% 100%`}">
								<view class="no">{{index+1}}</view>
								<view class="flex-1">
									{{item.amount}}
								</view>
								<view class="price">
									{{item.price}}
								</view>
							</view>
			
						</view>
					</view>
					<view class="flex-1 asks">
			
						<view v-for="(item, index) in asksList" :key="item[0]">
							<view class="flex item" :style="{backgroundSize: `${item.width}% 100%`}">
								<view class=" price">
									{{item.price}}
								</view>
								<view class="flex-1">
			
									{{item.amount}}
								</view>
								<view class="no">{{index+1}}</view>
							</view>
			
						</view>
					</view>
			
				</view>
			
			</view>
			<view class="trade-list" v-if="type==1">
				<view class="flex list-title">
					<view class="time">Date</view>
					<view class="flex-1" style="text-align: left;">Type</view>
					<view class="price">Price(USDT)</view>
					<view class="amount">Amount</view>
				</view>
			
				<view v-for="item in tradeList.slice(0,20)" :key="item.tradeId" class="flex">
					<view class="time">{{item.ts|formatTime}}</view>
					<view :class="['flex-1', {'up': item.direction==='buy'},{'down': item.direction==='sell'}]">
						{{item.direction==='buy'? 'Buy' :'Sell'}}
					</view>
					<view class="price">{{item.price | decimal4}}</view>
					<view class="amount">{{item.amount | decimal4}}</view>
				</view>
			</view>
			<capital-flow :symbol="symbol" v-if="type==2"/>
		</view>
		<info v-if="current===1"/>
	</view>
</template>

<script>
	import moment from 'moment-timezone';
	import {
		getMarketHistoryTrade,
		getSummaryHistory
	} from '@/api/trade.js';
	import HqChart from '../../components/kline/hq-chart.vue';
	import CapitalFlow from '@/pages/trade/components/capital-flow.vue';
	import Info from '@/pages/trade/components/info.vue';
	export default {
		components: {
			HqChart,
			CapitalFlow,
			Info,
		},
		data() {
			return {
				current: 0,
				tabs: ['Markets', 'Info.'],
				symbol: 'btcusdt',
				orderTabs: ['Order Book', 'Filled', 'Capital Flow'],
				tick: null,
				asksList: [],
				bidsList: [],
				tradeList: [],
				type: 0,
				detail: {},
				summaryHistory: [],
			}
		},
		onLoad(params) {
			this.symbol = params.symbol;
			this.subscribe({
				"sub": `market.${this.symbol}.detail`,
				"symbol": this.symbol
			}, (tick) => {
				this.detail = tick;
			});
			this.subscribe({
				"sub": `market.${this.symbol}.depth.step0`,
				"symbol": this.symbol,
				"step": 0,
				"pick": ["asks.20", "bids.20"]
			}, (tick) => {
				this.formatTicks(tick);
			});
			this.subscribe({
				"sub": `market.${this.symbol}.trade.detail`,
				"symbol": this.symbol,
			}, (tick) => {

				this.tradeList = [...tick.data, ...this.tradeList];
			});

			getMarketHistoryTrade({
				symbol: this.symbol,
				size: 20
			}).then(res => {
				if (res.status === 'ok') {
					//this.tradeList = res.data;
				}
			});

			
		},
		onShow() {},

		methods: {
			leftClick() {
				uni.navigateBack();
			},
			changeTab(index) {
				this.current = index;
			},
			/**
			 * @param {!Object} indata
			 * @return {undefined}
			 */
			formatTicks(indata) {
				/** @type {number} */


				var asks = indata.asks;
				var resolvedSourceMapConfigs = void 0 === asks ? [] : asks;
				var bids = indata.bids;
				var groupedMessages = void 0 === bids ? [] : bids;

				var n = resolvedSourceMapConfigs.map(function(canCreateDiscussions) {
					return canCreateDiscussions[1];
				}).sort(function(b, a) {
					return a - b;
				})[0] || 0;
				var level = groupedMessages.map(function(canCreateDiscussions) {
					return canCreateDiscussions[1];
				}).sort(function(b, a) {
					return a - b;
				})[0] || 0;

				const _ = Math.max(n, level);
				/**
				 * @param {!Object} fn
				 * @return {?}
				 */
				var c = function(fn) {
					return {
						price: fn[0],
						amount: fn[1],
						width: fn[1] / _ * 100
					};
				};


				var out = resolvedSourceMapConfigs.map(function(e) {
					return c(e);
				}).reverse();
				var self = groupedMessages.map(function(e) {
					return c(e);
				});
				/** @type {number} */
				var u = 5 - resolvedSourceMapConfigs.length;
				/** @type {number} */
				var f = 5 - groupedMessages.length;
				for (; u-- > 0;) {
					out.unshift({
						price: "--",
						amount: "--",
						width: 0
					});
				}
				for (; f-- > 0;) {
					self.push({
						price: "--",
						amount: "--",
						width: 0
					});
				}

				this.asksList = out;
				this.bidsList = self;
			},
			changeOrderTab(val) {
				this.type = val;
			}
		},
		filters: {
			formatTime(val) {
				moment.tz.setDefault("Asia/Shanghai")
				return moment(val).format('HH:mm:ss');
			},
			decimal4(val) {
				return val.toFixed(4);
			},
			price(val) {
				if (val>100) {
					return val.toFixed(2);
				} else if (val<1) {
					return val.toFixed(8);
				} else {
					return val.toFixed(4);
				}
			}
		}
	}
</script>
<style>
	page {
		background: #171e2c;
		color: #fff;
		font-size: 12px;
	}
</style>
<style scoped lang="scss">
	$down_color: #d14b64;
	$up_color: #03ad8f;
.nav-title {
	line-height: 50px;
	font-size: 16px;
	font-weight: bold;
}
	.top-tab {
		min-width: auto;
		width: 140px;
	}

	.up {
		color: $up_color;
	}

	.down {
		color: $down_color;
	}

	.detail {
		padding: 16px 16px 4px;

		.price {
			font-size: 28px;

			.up {
				color: $up_color;
			}

			.down {
				color: $down_color;
			}
		}

		.price-two {
			font-size: 14px;
			color: #cfd3e9;
		}

		.up {
			color: $up_color;
		}

		.down {
			color: $down_color;
		}

		.field {
			margin-left: 12px;
			margin-bottom: 12px;
		}

		.title {
			font-size: 12px;
			color: #cfd3e9;
		}
	}

	.list-title {
		padding: 12px 16px;
		text-align: center;
		font-size: 12px;
		color: #cfd3e9;
	}

	.trade-list {
		padding: 0 16px;
		line-height: 32px;

		.list-title {
			padding: 12px 0 12px;
		}

		.time {
			width: 100px;
			text-align: left;
			;
		}

		.price {
			width: 100px;
			text-align: left;
			;
		}

		.amount {
			width: 60px;
			float: right;
		}
	}

	/deep/.uni-body,
	/deep/uni-app {
		background: rgb(30, 35, 48);
	}

	.tick {
		font-size: 12px;
		color: #fff;
		line-height: 36px;

		.no {
			color: rgb(169, 176, 190);
			width: 20px;
			text-align: center;

		}

		.price {
			width: 100px;
		}
	}

	.bids {
		width: 50%;

		.item {
			background: linear-gradient(rgb(37, 48, 58), rgb(37, 48, 58)) no-repeat;
			background-position: 100%;
		}

		.price {
			color: #03ad8f;
			;
			text-align: right;
			padding-right: 12px;
		}
	}

	.asks {
		width: 50%;

		.item {
			background: linear-gradient(rgb(42, 42, 56), rgb(42, 42, 56)) no-repeat;
		}

		.price {
			color: #d14b64;
			padding-left: 12px;
		}
	}
</style>
