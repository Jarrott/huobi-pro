<template>
	<view>
		<view class="title">Capital Flow Analysis</view>
		<view class="time flex">
			<view :class="['t-item', {'active': current==item.type}]" v-for="item in time" @click="selectTime(item)"
				:key="item.value">{{item.value}}</view>
		</view>
		<qiun-data-charts type="ring" :opts="opts" :chartData="chartData" />
		<view class="table">
			<view class="flex item">
				<view class="type">Type</view>
				<view class="inflow">Inflow</view>
				<view class="outflow">Outflow</view>
				<view class="net">Net Inflow</view>
			</view>
			<view class="flex item">
				<view class="type">Big</view>
				<view class="inflow">{{this.summaryLatest[current].bigSell|float4}}</view>
				<view class="outflow">{{this.summaryLatest[current].bigBuy|float4}}</view>
				<view class="net">{{this.summaryLatest[current].bigInflow|float4}}</view>
			</view>
			<view class="flex item">
				<view class="type">Mid</view>
				<view class="inflow"> {{this.summaryLatest[current].middleSell|float4}}</view>
				<view class="outflow">{{this.summaryLatest[current].middleBuy|float4}}</view>
				<view class="net">{{this.summaryLatest[current].middleInflow|float4}}</view>
			</view>
			<view class="flex item">
				<view class="type">Small</view>
				<view class="inflow">{{this.summaryLatest[current].smallSell|float4}}</view>
				<view class="outflow">{{this.summaryLatest[current].smallBuy|float4}}</view>
				<view class="net">{{this.summaryLatest[current].smallInflow|float4}}</view>
			</view>
			<view class="flex item">
				<view class="type">Total</view>
				<view class="inflow">{{this.summaryLatest[current].totalSell|float4}}</view>
				<view class="outflow">{{this.summaryLatest[current].totalBuy|float4}}</view>
				<view class="net">{{this.summaryLatest[current].totalInflow|float4}}</view>
			</view>
		</view>
		<view class="title">5*24H Big Order Inflow(LUNR)</view>
		<net-inflow></net-inflow>
	</view>
</template>

<script>
	import {
		getSummaryLatest,
		getSummaryHistory
	} from '@/api/trade.js';
	import NetInflow from '@/pages/trade/components/net-inflow.vue'
	import moment from 'moment';
	export default {
		props: {
			symbol: {
				type: String,
			}
		},
		components: {
			NetInflow
		},
		data() {
			return {
				time: [{
					type: '15min',
					value: '15M',
				}, {
					type: '30min',
					value: '30M',
				}, {
					type: '60min',
					value: '1H',
				}, {
					type: '2hour',
					value: '2H',
				}, {
					type: '4hour',
					value: '4H',
				}, {
					type: '1day',
					value: '1D',
				}],
				current: '15min',
				summaryHistory: [],
				summaryLatest: [],
				chartData: {
					series: [{
						data: [{
							"name": "一班",
							"value": 50
						}, {
							"name": "二班",
							"value": 30
						}]
					}]
				},
				opts: {
					rotate: false,
					rotateLock: false,
					color: ["#dbacb3", "#9dd1c9", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [15, 5, 5, 5],
					dataLabel: true,
					legend: {
						show: true,
						position: "right",
						lineHeight: 25
					},
					title: {
						name: "Captical Flow",
						fontSize: 10,
						color: "#666666"
					},
					extra: {
						ring: {
							ringWidth: 20,
							activeOpacity: 0.5,
							activeRadius: 10,
							offsetAngle: 0,
							labelWidth: 15,
							border: false,
							borderWidth: 3,
							borderColor: "#FFFFFF",
							centerColor: '#171e2c',
							labelWidth: '40'
						}
					}
				}
			}
		},
		mounted() {
			getSummaryLatest({
				symbol: this.symbol,
			}).then(res => console).catch(err => {
				const res = {
					"code": 200,
					"data": {
						"15min": {
							"ts": 1653720370,
							"bigBuy": 0.0,
							"bigSell": 0.0,
							"bigInflow": 0.0,
							"middleBuy": 0.0,
							"middleSell": 0.0,
							"middleInflow": 0.0,
							"smallBuy": 4211.042880389099,
							"smallSell": 4590.3022,
							"smallInflow": -379.259319610901,
							"totalBuy": 4211.042880389099,
							"totalSell": 4590.3022,
							"totalInflow": -379.259319610901
						},
						"30min": {
							"ts": 1653720370,
							"bigBuy": 0.0,
							"bigSell": 0.0,
							"bigInflow": 0.0,
							"middleBuy": 0.0,
							"middleSell": 0.0,
							"middleInflow": 0.0,
							"smallBuy": 10396.77065302058,
							"smallSell": 13445.5696,
							"smallInflow": -3048.798946979421,
							"totalBuy": 10396.77065302058,
							"totalSell": 13445.5696,
							"totalInflow": -3048.798946979421
						},
						"4hour": {
							"ts": 1653720370,
							"bigBuy": 0.0,
							"bigSell": 0.0,
							"bigInflow": 0.0,
							"middleBuy": 0.0,
							"middleSell": 0.0,
							"middleInflow": 0.0,
							"smallBuy": 69671.98985867373,
							"smallSell": 59776.195900000006,
							"smallInflow": 9895.793958673723,
							"totalBuy": 69671.98985867373,
							"totalSell": 59776.195900000006,
							"totalInflow": 9895.793958673723
						},
						"2hour": {
							"ts": 1653720370,
							"bigBuy": 0.0,
							"bigSell": 0.0,
							"bigInflow": 0.0,
							"middleBuy": 0.0,
							"middleSell": 0.0,
							"middleInflow": 0.0,
							"smallBuy": 26305.504391320126,
							"smallSell": 37011.880000000005,
							"smallInflow": -10706.375608679875,
							"totalBuy": 26305.504391320126,
							"totalSell": 37011.880000000005,
							"totalInflow": -10706.375608679875
						},
						"60min": {
							"ts": 1653720370,
							"bigBuy": 0.0,
							"bigSell": 0.0,
							"bigInflow": 0.0,
							"middleBuy": 0.0,
							"middleSell": 0.0,
							"middleInflow": 0.0,
							"smallBuy": 19689.275404092004,
							"smallSell": 25888.349100000003,
							"smallInflow": -6199.073695907995,
							"totalBuy": 19689.275404092004,
							"totalSell": 25888.349100000003,
							"totalInflow": -6199.073695907995
						},
						"1day": {
							"ts": 1653720370,
							"bigBuy": 0.0,
							"bigSell": 0.0,
							"bigInflow": 0.0,
							"middleBuy": 8543.6258,
							"middleSell": 0.0,
							"middleInflow": 8543.6258,
							"smallBuy": 608685.893069208,
							"smallSell": 720019.2384557787,
							"smallInflow": -111333.34538657022,
							"totalBuy": 617229.518869208,
							"totalSell": 720019.2384557787,
							"totalInflow": -102789.71958657022
						}
					},
					"success": true
				}

				this.summaryLatest = res.data;
			})
			getSummaryHistory({
				symbol: this.symbol,
				period: '1day',
				size: 5,
			}).then(res => console.log(res)).catch(res => {
				res = {
					"code": 200,
					"data": [{
						"ts": 1653667200,
						"bigBuy": 0.0,
						"bigSell": 0.0,
						"bigInflow": 0.0,
						"middleBuy": 0.0,
						"middleSell": 0.0,
						"middleInflow": 0.0,
						"smallBuy": 240754.55126383586,
						"smallSell": 243694.44043360616,
						"smallInflow": -2939.8891697701893,
						"totalBuy": 240754.55126383586,
						"totalSell": 243694.44043360616,
						"totalInflow": -2939.8891697701893
					}, {
						"ts": 1653580800,
						"bigBuy": 0.0,
						"bigSell": 0.0,
						"bigInflow": 0.0,
						"middleBuy": 30988.793638666666,
						"middleSell": 24497.6722,
						"middleInflow": 6491.121438666665,
						"smallBuy": 824070.3149118597,
						"smallSell": 930852.3526548692,
						"smallInflow": -106782.03774300951,
						"totalBuy": 855059.1085505263,
						"totalSell": 955350.0248548692,
						"totalInflow": -100290.91630434291
					}, {
						"ts": 1653494400,
						"bigBuy": 0.0,
						"bigSell": 0.0,
						"bigInflow": 0.0,
						"middleBuy": 0.0,
						"middleSell": 16295.3653,
						"middleInflow": -16295.3653,
						"smallBuy": 280496.8983347748,
						"smallSell": 305861.1923543586,
						"smallInflow": -25364.294019583787,
						"totalBuy": 280496.8983347748,
						"totalSell": 322156.5576543586,
						"totalInflow": -41659.65931958379
					}, {
						"ts": 1653408000,
						"bigBuy": 0.0,
						"bigSell": 0.0,
						"bigInflow": 0.0,
						"middleBuy": 0.0,
						"middleSell": 0.0,
						"middleInflow": 0.0,
						"smallBuy": 640735.514837232,
						"smallSell": 733477.7038,
						"smallInflow": -92742.18896276806,
						"totalBuy": 640735.514837232,
						"totalSell": 733477.7038,
						"totalInflow": -92742.18896276806
					}, {
						"ts": 1653321600,
						"bigBuy": 0.0,
						"bigSell": 0.0,
						"bigInflow": 0.0,
						"middleBuy": 0.0,
						"middleSell": 0.0,
						"middleInflow": 0.0,
						"smallBuy": 788279.8343884015,
						"smallSell": 926237.0148010345,
						"smallInflow": -137957.180412633,
						"totalBuy": 788279.8343884015,
						"totalSell": 926237.0148010345,
						"totalInflow": -137957.180412633
					}],
					"success": true
				};
				this.summaryHistory = res.data;
			})
		},
		methods: {
			selectTime(item) {
				this.current = item.type;
			},
		},
		filters: {
			float4(val) {
				if (val != 0) {
					return val.toFixed(4);
				} else {
					return val;
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.item {
		line-height: 32px;

		.type {
			flex: 1;
		}

		.inflow {
			width: 90px;
			color: #03ad8f;
		}

		.outflow {
			width: 90px;
			color: #d14b64
		}

		.net {
			width: 90px;
			text-align: right;
			color: #d14b64
		}
	}
	.title {
		font-size: 20px;
		padding: 16px;
	}
	.table {
		background: #1d273d;
		border-radius: 4px;
		margin: 0 16px;
		padding: 12px 8px;
	}

	.time {
		padding: 0 8px;
		text-align: center;
		justify-content: space-evenly;

		.t-item {
			background: #1d263a;
			width: 15%;
			padding: 4px 0;
		}

		.active {
			color: rgb(41, 121, 255);
		}
	}
</style>
