<template>
	<view :class="screenDirection">
		<view class="data-echart-panel">
			<view class="quote" v-if="screenDirection == 'horizontal'" ref="quote">
				<view class="quote-left">
					<view class="code">{{ Symbol }}</view>
					<view class="price">
						<text class="prize">38901.6</text>
						<text class="zf">0.28%</text>
					</view>
				</view>
				<view class="quote-right">
					<view class="panel">买盘 38926.4</view>
					<view class="panel">卖盘 38925.4</view>
				</view>
				<view>
					<image @click="changeType" style="width: 50rpx; float: right; margin-right: 20rpx"
						src="@/static/images/kline/close.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="ec-tab-bar">
				<view class="ec-tabs" v-if="screenDirection == 'vertical'" ref="ecTabs">
					<view class="col" v-for="item in periodList.slice(0,5)">
						<view :class="{ 'ec-item': true, active: period=== item.period }" @click="changePeriod(item)">
							{{ item.name }}
						</view>
					</view>
					<view class="col">
						<view class="ec-item" @click="changeDepth">深度图</view>
					</view>
					<view class="col">
						<view class="ec-item ec-more-item" @click="ecMore">更多</view>
					</view>
					<view class="col">
						<view class="ec-item ec-more-item" @click="changeType" v-if="this.period !== -1">横屏</view>
					</view>
					<view class="col">
						<view class="ec-set" @click="FolderMore" v-if="this.period !== -1"></view>
					</view>
				</view>
				<!-- 弹窗 -->
				<view class="ex-popover" v-if="showA">
					<view class="ec-tabs">
						<view class="col" v-for="item in periodList.slice(6)">
							<view :class="{ 'ec-item': true, active: period=== item.period }"
								@click="changePeriod(item)">{{item.name}}
							</view>
						</view>
					</view>
				</view>
				<!-- 弹窗 -->
				<view class="ex-popover operator-panel" v-if="showB">
					<view class="ec-filter">
						<view class="elabel">指标</view>
						<view class="flex_bd flex-center flex-wrap flex">
							<view :class="{ 'filter-item': true, active: mainIndicator === 'MA' }"
								@click="changeIndex('MA', 0)">MA</view>
							<view :class="{
                  'filter-item': true,
                  active: mainIndicator === 'BOLL',
                }" @click="changeIndex('BOLL', 0)">BOLL</view>
						</view>
					</view>
					<view class="ec-filter">
						<view class="elabel">图幅</view>
						<view class="flex_bd flex-center flex-wrap flex">
							<view :class="{
                  'filter-item': true,
                  active: futuIndicator === 'MACD',
                }" @click="changeIndex('MACD', 1)">MACD</view>
							<view :class="{
                  'filter-item': true,
                  active: futuIndicator === 'KDJ',
                }" @click="changeIndex('KDJ', 1)">KDJ</view>
							<view :class="{
                  'filter-item': true,
                  active: futuIndicator === 'RSJ',
                }" @click="changeIndex('RSJ', 1)">RSJ</view>
							<view :class="{ 'filter-item': true, active: futuIndicator === 'WR' }"
								@click="changeIndex('WR', 1)">WR</view>
						</view>
					</view>
					<view class="iconfont" :class="eyeShow ? 'icon-eye' : 'icon-eye-close'" @click="eyeToggle"></view>
				</view>
			</view>
			<!-- 横屏 BEGIN -->
			<view class="ec-tabs" v-if="screenDirection == 'horizontal'" ref="ecTabs">
				<view class="col" v-for="item in periodList">
					<view :class="{ 'ec-item': true, active: period === item.period }" @click="changePeriod(item)">
						{{ item.name }}
					</view>
				</view>
				<view class="col">
					<view class="ec-set" @click="showOperator"></view>
				</view>
			</view>
			<view class="caozuo operator-panel" ref="operator" v-if="isShowOperator">
				<view>
					<view class="title">指标</view>
					<view class="content">
						<view :class="{ active: mainIndicator === 'MA' }" @click="changeIndex('MA', 0)">MA</view>
						<view :class="{ active: mainIndicator === 'BOLL' }" @click="changeIndex('BOLL', 0)">BOLL</view>
					</view>
				</view>
				<view>
					<view class="title">副图</view>
					<view class="content">
						<view :class="{ active: futuIndicator === 'MACD' }" @click="changeIndex('MACD', 1)">MACD</view>
						<view :class="{ active: futuIndicator === 'KDJ' }" @click="changeIndex('KDJ', 1)">KDJ</view>
						<view :class="{ active: futuIndicator === 'RSI' }" @click="changeIndex('RSI', 1)">RSI</view>
						<view :class="{ active: futuIndicator === 'WR' }" @click="changeIndex('WR', 1)">WR</view>
					</view>
				</view>
				<view class="iconfont" :class="eyeShow ? 'icon-eye' : 'icon-eye-close'" @click="eyeToggle"
					style="position: absolute; bottom: 20rpx"></view>
			</view>
			<!-- 横屏 END -->
			<!--  #ifdef  H5 -->
			<div class="kline" v-bind:id="KLineID" v-bind:style="{
          width: ChartWidth + 'px',
          height: ChartHeight + 'px',
          'background-color': '#000',
        }" ref="kline"></div>
			<!--  #endif -->
			<!--  #ifndef  H5 -->

			<canvas v-bind:id="KLineID" v-bind:canvas-id="KLineID" class="kline2"
				v-bind:style="{ width: ChartWidth + 'px', height: ChartHeight + 'px' }" @touchstart="KLineTouchStart"
				@touchmove="KLineTouchMove" @touchend="KLineTouchEnd"></canvas>

			<!--  #endif -->
		</view>
	</view>
</template>

<script>
	// #ifdef H5
	import HQChart from "@/uni_modules/jones-hqchart2/js_sdk/umychart.uniapp.h5.js?v=999";
	import {
		JSCommonHQStyle
	} from "@/uni_modules/jones-hqchart2/js_sdk/umychart.style.wechat.js";

	import "@/uni_modules/jones-hqchart2/js_sdk/umychart.resource/font/iconfont.css";
	// #endif

	// #ifndef H5
	import {
		JSCommon
	} from "@/uni_modules/jones-hqchart2/js_sdk/umychart.wechat.3.0.js";
	import {
		JSCommonHQStyle
	} from "@/uni_modules/jones-hqchart2/js_sdk/umychart.style.wechat.js";
	import {
		JSConsole
	} from "@/uni_modules/jones-hqchart2/js_sdk/umychart.console.wechat.js";

	//禁用日志
	JSConsole.Complier.Log = () => {};
	JSConsole.Chart.Log = () => {};
	// #endif

	import moment from "moment";
	import {
		getHistoryKline,
		getMarketDepth,
	} from "@/api/kline.js";
	import Vue from "vue";

	function DefaultData() {}

	DefaultData.GetKLineOption = function() {
		let data = {
			Type: "历史K线图",
			DragDownload: {
				Minute: {
					Enable: true,
				},
			}, //拖拽下载

			IsApiPeriod: true, //周期和复权数据是否全部使用api获取， 默认周期和复权是本地计算的;true是从改后台读取，false，前端用1分钟的线合并
			//窗口指标
			Windows: [{
					Index: "MA",
					Modify: false,
					Change: false,
					FloatPrecision: 6,
					KLineType: -1,
				}, {
					Index: "VOL",
					Modify: false,
					Change: false
				},
				{
					Index: "MACD",
					Modify: false,
					Change: false,
					FloatPrecision: 6,
				}
			],

			EnableScrollUpDown: true,
			IsAutoUpdate: true,
			IsCorssOnlyDrawKLine: true,
			CorssCursorTouchEnd: true,
			IsClickShowCorssCursor: true,
			CorssCursorInfo: {
				Left: 2,
				Right: 2,
				Bottom: 1,
				VPenType: 2,
				HPenType: 1,
				VLineType: 1,
				IsShowCorss: true,
			}, //十字光标刻度设置
			//IsFullDraw:true,

			EnableScrollUpDown: true,
			IsAutoUpdate: true,
			IsCorssOnlyDrawKLine: true,
			CorssCursorTouchEnd: true,
			IsClickShowCorssCursor: true,
			CorssCursorInfo: {
				Left: 2,
				Right: 2,
				Bottom: 1,
				VPenType: 2,
				HPenType: 1,
				VLineType: 1,
				IsShowCorss: true,
			}, //十字光标刻度设置
			//IsFullDraw:true,

			//边框
			Border: {
				Left: 0,
				Right: 0, //右边间距
				Top: 25,
				Bottom: 25,
			},

			KLine: {
				DragMode: 1,
				Right: 1, //复权 0 不复权 1 前复权 2 后复权
				Period: 1, //周期: 0 日线 1 周线 2 月线 3 年线
				PageSize: 32, //一屏个数
				IsShowTooltip: false,
				DrawType: 8,
				RightSpaceCount: 0,
				//DataWidth: 16 //粗细
			},
			KLineTitle: {
				IsShow: false,
			},
			ExtendChart: [{
					Name: "KLineTooltip",
				}, //开启手机端tooltip
			],

			//子框架设置
			Frame: [{
					SplitCount: 5,
					IsShowLeftText: false,
					Custom: [{
						Type: 0,
						Position: "right",
					}, ],
					IsShowXLine: true,
					IsShowYLine: true,
					Height: 6,
				},
				{
					SplitCount: 2,
					IsShowLeftText: false,
					Height: 2,
				},
				{
					SplitCount: 3,
					IsShowLeftText: false,
					Height: 2,
				},
			],
		};

		return data;
	};

	DefaultData.CreateGuid = function() {
		function S4() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		}

		return (
			"guid" +
			(S4() +
				S4() +
				"-" +
				S4() +
				"-" +
				S4() +
				"-" +
				S4() +
				"-" +
				S4() +
				S4() +
				S4())
		);
	};

	var g_JSChart = new Map();

	export default {
		name: "HQChart",

		props: {
			symbol: {
				type: String,
				default: 'btcusdt'
			},
			DefaultChart: {
				type: String,
			},
			type: {
				type: String,
			},
			decimal: {
				type: String,
			}
		},

		data() {
			let screenWidth = 0;
			uni.getSystemInfo({
				success: (res) => {
					screenWidth = res.screenWidth;

				}
			})
			return {
				symbolType: "",
				ChartWidth: screenWidth,
				ChartHeight: 500,
				KLineID: "HQChart_" + DefaultData.CreateGuid(),
				period: '15min', //周期
				pertab: 1,
				spread: 0,
				volatility: 0.0001,
				drawType: 4,
				KLine: {
					Option: {
						...DefaultData.GetKLineOption(),
						Border: {
							Top: 0,
							Right: 60,
						},
					},
				},
				lastData: null, //最后一根柱子
				ChartType: "Kline",
				screenDirection: "vertical",
				websock: null,
				showA: false,
				showB: false,
				eyeShow: true,
				isShowOperator: false, //横屏显示指标和副图设置
				periodList: [{
						name: "15分",
						period: '15min',
						value: 15,
						type: 'min',
					},
					{
						name: "1时",
						period: '60min',
						value: 60,
						type: 'min',
					},
					{
						name: "4时",
						period: '4hour',
						value: 240,
						type: 'min',
					},
					{
						name: "1日",
						period: '1day',
						value: 1,
						type: 'day'
					},
					{
						name: "1周",
						period: '1week',
						value: 7,
						type: 'day'
					}, {
						name: "分时",
						period: '15min',
						value: 15,
						type: 'min',
					},
					{
						name: "1分",
						period: '1min',
						value: 1,
						type: 'min',
					},
					{
						name: "5分",
						period: '5min',
						value: 5,
						type: 'min',
					},
					{
						name: "30分",
						period: '30min',
						value: 30,
						type: 'min',
					},
					{
						name: "1月",
						period: '1mon',
						value: 30,
						type: 'day'
					}
				],
				mainIndicator: "MA", //主图选中的指标
				mainIndicatorSave: "MA", //把主图选中的指标暂存，方便显示隐藏指标，取回
				futuIndicator: "MACD", //副图显示的指标
				isapp: false,
				Socket: null,
				height: 0,
			}
		},
		created() {
			this.ChartType = "KLine";
		},
		mounted() {
			this.CreateKLineChart()
			this.ChartType = this.DefaultChart;
		},
		methods: {
			changeDepth() {
				this.KLine.Option.Type = '深度图';
				this.GetJSChart().SetOption(this.KLine.Option);
			},
			// 切换周期
			changePeriod({
				period,
				value,
				type
			}) {
				this.period = period;
				if (type === 'min') {
					this.GetJSChart().ChangePeriod(value + 20000);
				} else if (type === 'day') {
					this.GetJSChart().ChangePeriod(value + 40000);
				}

				//this.changeDrawType();
			},
			changeDrawType() {
				if (this.period == -1) {
					this.KLine.Option.Windows[0].IsMainIndex = true;
					this.changeIndex("EMPTY", 0);
					this.drawType = 4;
					this.GetJSChart().ChangeKLineDrawType(this.drawType);
					this.changeIndex(this.futuIndicator, 1);
				} else {
					this.changeIndex(this.mainIndicator, 0);
					if (this.drawType !== 0) {
						this.drawType = 0;
						this.GetJSChart().ChangeKLineDrawType(this.drawType);
						this.changeIndex(this.mainIndicator, 0);
					}
				}
			},
			showOperator() {
				this.isShowOperator = true;
				this.$nextTick(() => {
					if (this.screenDirection === "horizontal") {
						this.ChartHeight =
							this.ChartHeight - this.$refs.operator.$el.offsetWidth;
						this.$nextTick(() => {
							this.GetJSChart().OnSize();
						});
					}
				});
			},
			ecMore() {
				this.showA = !this.showA;
			},
			FolderMore() {
				this.showB = !this.showB;
			},
			changeType() {
				console.log(this.ChartWidth)
				this.GetJSChart().SetLanguage("EN");
				this.screenDirection =
					this.screenDirection === "horizontal" ? "vertical" : "horizontal";
				if (this.screenDirection === "horizontal") {
					this.KLine.Option.Type = "历史K线图横屏";
					this.KLine.Option.Border.Top = 0;
					this.KLine.Option.Border.Bottom = 0;
					this.KLine.Option.Border.Left = 25;
					this.KLine.Option.Border.Right = 60;
					this.GetJSChart().SetOption(this.KLine.Option);
					if (this.isapp) {} else {
						this.$nextTick(() => {
							let tabHeight = this.$refs.ecTabs.$el.offsetHeight;
							let quoteHeight = this.$refs.quote.$el.offsetHeight;
							this.ChartWidth =
								this.width -
								this.$refs.ecTabs.$el.offsetHeight -
								this.$refs.quote.$el.offsetHeight;
							this.ChartHeight = (this.ChartHeight + 80) * 2 + 50;
							this.$nextTick(function() {
								this.GetJSChart().OnSize();
							});
						});
					}

					this.GetJSChart().SetLanguage("EN");
				} else {
					this.KLine.Option.Type = "历史K线图";
					this.KLine.Option.Border.Top = 0;
					this.KLine.Option.Border.Bottom = 25;
					this.KLine.Option.Border.Left = 0;
					this.KLine.Option.Border.Right = 60;
					this.ChartWidth = this.width;
					this.ChartHeight = this.width * 1.3;
					console.log("SetSize", this.ChartHeight);
					this.GetJSChart().SetOption(this.KLine.Option);
					if (this.isapp) {
						this.GetJSChart().OnSize();
					} else {
						this.$nextTick(function() {
							this.GetJSChart().OnSize();
							if (this.period == -1) {
								this.changeDrawType();
							} else {}
						});
					}

					this.GetJSChart().SetLanguage("EN");
				}

				//关闭有可能出现的弹窗
				this.showA = false;
				this.showB = false;
				this.isShowOperator = false;
			},
			eyeToggle() {
				this.eyeShow = !this.eyeShow;
				if (this.eyeShow) {
					this.mainIndicator = this.mainIndicatorSave;
				} else {
					this.mainIndicator = "EMPTY";
				}
				this.changeIndex(this.mainIndicator, 0);
			},
			SetSize(width, height) {
				this.width = width;
				this.height = height;
				this.ChartWidth = width;
				this.ChartHeight = height / 2 + 80;
				console.log("SetSize", this.ChartHeight);
			},

			GetJSChart() {
				console.log(g_JSChart.has(this.KLineID))
				if (g_JSChart.has(this.KLineID)) return g_JSChart.get(this.KLineID);

				return null;
			},

			SetJSChart(jsChart) {
				g_JSChart.set(this.KLineID, jsChart);
			},

			ClearChart() {
				var jsChart = this.GetJSChart();
				if (jsChart) {
					jsChart.ChartDestory();
					this.SetJSChart(null);
				}

				// #ifdef H5
				var divKLine = document.getElementById(this.KLineID);
				while (divKLine.hasChildNodes()) {
					divKLine.removeChild(divKLine.lastChild);
				}
				// #endif
			},

			OnSize() {
				// #ifdef H5
				this.OnSize_h5();
				// #endif
			},

			OnSize_h5() {
				var chartHeight = this.ChartHeight;
				var chartWidth = this.ChartWidth;
				console.log("SetSize", this.ChartHeight);
				var kline = this.$refs.kline;
				kline.style.width = chartWidth + "px";
				kline.style.height = chartHeight + "px";

				var jsChart = this.GetJSChart();
				if (jsChart) jsChart.OnSize();
			},
			OnSize_app() {
				var chartHeight = this.ChartHeight;
				var chartWidth = this.ChartWidth;
				var kline = this.$refs.kline;
				kline.style.width = chartWidth + "px";
				kline.style.height = chartHeight + "px";

				var jsChart = this.GetJSChart();
				if (jsChart) jsChart.OnSize();
			},
			CreateHQChart() {
				if (this.ChartType == "Minute") this.CreateMinuteChart();
				else this.CreateKLineChart();
			},

			CreateKLineChart_h5() { //创建K线图
				this.ClearChart();

				var blackStyle = HQChart.HQChartStyle.GetStyleConfig(
					HQChart.STYLE_TYPE_ID.BLACK_ID
				);
				blackStyle.BGColor = 'rgb(16, 23, 35)';
				blackStyle.DownBarColor = 'rgb(77,170,144)';
				blackStyle.UpBarColor = 'rgb(209,75,100)';
				HQChart.JSChart.SetStyle(blackStyle);
				let resource = HQChart.JSChart.GetResource();
				//resource.CorssCursorHPenColor = "rgb(115,227,195)";

				HQChart.JSChart.SetStyle(blackStyle);
				this.$refs.kline.style.backgroundColor = blackStyle.BGColor; //div背景色设置黑色

				var chart = HQChart.JSChart.Init(this.$refs.kline);

				this.KLine.Option.Symbol = this.symbol;
				this.KLine.Option.NetworkFilter = this.NetworkFilter;
				chart.SetOption(this.KLine.Option);
				this.SetJSChart(chart);
				chart.AddEventCallback({
					event: HQChart.JSCHART_EVENT_ID.RECV_START_AUTOUPDATE,
					callback: this.startAutoUpdate,
				});
				chart.AddEventCallback({
					event: HQChart.JSCHART_EVENT_ID.RECV_STOP_AUTOUPDATE,
					callback: this.stopAutoUpdate,
				});
				return chart;
			},

			CreateKLineChart_app() {
				this.isapp = true;
				this.ClearChart();

				var element = new JSCommon.JSCanvasElement();
				// #ifdef APP-PLUS
				element.IsUniApp = true; //canvas需要指定下 是uniapp的app
				// #endif
				element.ID = this.KLineID;
				element.Height = this.ChartHeight; //高度宽度需要手动绑定!!
				element.Width = this.ChartWidth;

				var blackStyle = JSCommonHQStyle.GetStyleConfig(
					JSCommonHQStyle.STYLE_TYPE_ID.BLACK_ID
				);
				blackStyle.BGColor = 'rgb(16, 23, 35)';
				blackStyle.DownBarColor = 'rgb(77,170,144)';
				blackStyle.UpBarColor = 'rgb(209,75,100)';
				JSCommon.JSChart.SetStyle(blackStyle);

				var chart = JSCommon.JSChart.Init(element);
				this.KLine.Option.NetworkFilter = this.NetworkFilter;
				this.KLine.Option;
				this.KLine.Option.Symbol = this.symbol;
				this.KLine.Option.IsClickShowCorssCursor = true;
				this.KLine.Option.IsFullDraw = true; //每次手势移动全屏重绘
				chart.SetOption(this.KLine.Option);
				this.SetJSChart(chart);
				// setTimeout(() => {
				//   this.changePeriod(1);
				// }, 100);
				// setTimeout(() => {
				//   this.changePeriod(-1);
				// }, 500);
				chart.AddEventCallback({
					event: JSCommon.JSCHART_EVENT_ID.RECV_START_AUTOUPDATE,
					callback: this.startAutoUpdate,
				});
				chart.AddEventCallback({
					event: JSCommon.JSCHART_EVENT_ID.RECV_STOP_AUTOUPDATE,
					callback: this.stopAutoUpdate,
				});
				return chart;
			},

			CreateKLineChart() {
				this.ChartType = "KLine";

				// #ifdef H5
				this.CreateKLineChart_h5();
				// #endif

				// #ifndef H5
				this.CreateKLineChart_app();
				// #endif
			},

			CreateMinuteChart_h5() { //创建日线图
				this.ClearChart();

				var blackStyle = HQChart.HQChartStyle.GetStyleConfig(
					HQChart.STYLE_TYPE_ID.BLACK_ID
				);
				HQChart.JSChart.SetStyle(blackStyle);
				//this.$refs.kline.style.backgroundColor=blackStyle.BGColor;	//div背景色设置黑色

				var chart = HQChart.JSChart.Init(this.$refs.kline);
				JSCommon.JSChartGetResource().FrameLogo.Text = 'HuoBi';
				console.log(9999);
				this.Minute.Option.Symbol = this.symbol;
				this.Minute.Option.NetworkFilter = this.NetworkFilter;
				chart.SetOption(this.Minute.Option);
				this.SetJSChart(chart);
			},

			CreateMinuteChart_app() {
				this.ClearChart();

				var element = new JSCommon.JSCanvasElement();
				// #ifdef APP-PLUS
				element.IsUniApp = true; //canvas需要指定下 是uniapp的app
				// #endif
				element.ID = this.KLineID;
				element.Height = this.ChartHeight; //高度宽度需要手动绑定!!
				element.Width = this.ChartWidth;

				//用黑色风格
				var blackStyle = JSCommonHQStyle.GetStyleConfig(
					JSCommonHQStyle.STYLE_TYPE_ID.BLACK_ID
				);
				JSCommon.JSChart.SetStyle(blackStyle);

				var chart = JSCommon.JSChart.Init(element);

				this.Minute.Option.NetworkFilter = this.NetworkFilter;
				this.Minute.Option.Symbol = this.symbol;
				this.Minute.Option.IsFullDraw = true; //每次手势移动全屏重绘
				chart.SetOption(this.Minute.Option);

				this.SetJSChart(chart);
			},

			CreateMinuteChart() {
				this.ChartType = "Minute";

				// #ifdef H5
				this.CreateMinuteChart_h5();
				// #endif

				// #ifndef H5
				this.CreateMinuteChart_app();
				// #endif
			},

			IsKLineChart() {
				var jsChart = this.GetJSChart();
				if (!jsChart) return false;
				var className = jsChart.JSChartContainer.ClassName;
				if (
					className == "KLineChartContainer" ||
					className == "KLineChartHScreenContainer"
				)
					return true;

				return false;
			},

			IsMinuteChart() {
				var jsChart = this.GetJSChart();
				var className = jsChart.JSChartContainer.ClassName;
				if (
					className == "MinuteChartContainer" ||
					className == "MinuteChartHScreenContainer"
				)
					return true;

				return false;
			},

			//K线周期切换
			ChangeKLinePeriod(period) {
				var jsChart = this.GetJSChart();
				this.KLine.Option.KLine.Period = period;
				if (this.IsKLineChart() && jsChart) {
					jsChart.ChangePeriod(period);
				} else {
					this.CreateKLineChart();
				}
			},

			//走势图多日切换
			ChangeMinutePeriod(dayCount) {
				var jsChart = this.GetJSChart();
				this.Minute.Option.DayCount = dayCount;
				if (this.IsMinuteChart() && jsChart) {
					jsChart.ChangeDayCount(dayCount);
				} else {
					this.CreateMinuteChart(); //类型不对 删了重建
				}
			},

			changeIndex(index, frame) {
				this.GetJSChart().ChangeIndex(frame, index);

				if (frame === 1) {
					this.futuIndicator = index;
				} else {
					this.mainIndicator = index;
					if (index !== "EMPTY") this.mainIndicatorSave = index;
				}
			},
			//切换指标 windowId=窗口索引 name=指标名字
			ChangeKLineIndex(windowId, name) {
				var jsChart = this.GetJSChart();
				if (this.IsKLineChart() && jsChart) jsChart.ChangeIndex(windowId, name);
			},

			//切换股票
			ChangeSymbol(symbol) {
				this.symbol = symbol;
				var jsChart = this.GetJSChart();
				if (jsChart) jsChart.ChangeSymbol(symbol);
			},

			///////////////////////////////////////////////
			//手势事件 app/小程序才有
			//KLine事件
			KLineTouchStart(event) {
				var jsChart = this.GetJSChart();
				if (jsChart) jsChart.OnTouchStart(event);
			},

			KLineTouchMove(event) {
				var jsChart = this.GetJSChart();
				if (jsChart) jsChart.OnTouchMove(event);
			},

			KLineTouchEnd(event) {
				var jsChart = this.GetJSChart();
				if (jsChart) jsChart.OnTouchEnd(event);
			},
			NetworkFilter(data, callback) {
				data.PreventDefault = true;
				console.log('NetworkFilter', data.Name);
				switch (data.Name) {
					case "KLineChartContainer::ReqeustHistoryMinuteData":
						this.requestHistoryData(callback);
						break;
					case "KLineChartContainer::RequestDragMinuteData":
						this.RequestDragMinuteData(callback);
						break;
					case "KLineChartContainer::RequestHistoryData":
						this.requestHistoryData(callback);
						break;
					case "KLineChartContainer::RequestFlowCapitalData":
						this.requestHistoryData(callback);
						break;
					case "DepthChartContainer::RequestDepthData":
						this.requestMarketDepth(callback);
						break;
				}

			},
			requestMarketDepth(callback) {
				getMarketDepth({
					symbol: this.symbol,
					depth: 20,
					type: 'step9',
				}).then(res => {
					const {
						status,
						tick
					} = res;
					if (status === "ok") {
						callback({
							code: 0,
							asks: tick.asks,
							bids: tick.bids,
							datatype: "snapshot"
						});
					}
				})
			},
			// 获取k线数据
			requestHistoryData(callback) {
				//this.subscribe({sub: `market.${this.symbol}.kline.${this.period}`});

				getHistoryKline({
						symbol: this.symbol,
						period: this.period,
						size: 1000,
					})
					.then((res) => {
						const {
							status,
							data
						} = res;
						if (status === "ok") {

							this.handleHistoryData(data, callback);
						}
					});
			},
			handleHistoryData(res, callback) {
				const data = [];
				res.reverse().map(item => {
					const date = moment(item.id * 1000).format('YYYYMMDD') * 1;
					const time = moment(item.id * 1000).format('HHmm') * 1;
					data.push([date, 0, item.open, item.high, item.low, item.close, item.vol, item.amount, time]);
				});
				this.lastData = data[data.length - 1]; //更新最后一根柱子
				var hqdata = {
					Code: 0,
					data,
					name: "",
					symbol: this.symbol + "." + this.symbolType,
				};
				if (this.isapp) {
					callback({
						data: hqdata
					});
				} else {
					console.log('NetworkFilter', hqdata)
					callback(hqdata);
				}
				//this.SubscribeMinuteRealtimeData(this.symbol);
			},
			handlePrice(price) {
				return price - this.spread * this.volatility / 2
			},
			handleHistoryMinuteData(res, callback) {
				const close = res.c,
					open = res.o,
					high = res.h,
					low = res.l,
					times = res.t;
				const data = [];
				times.forEach((time, index) => {
					let temp = [
						Number(moment(time * 1000).format("YYYYMMDD")),
						0,
						this.handlePrice(open[index]),
						this.handlePrice(high[index]),
						this.handlePrice(low[index]),
						this.handlePrice(close[index]),
						0,
						0,
						Number(moment(time * 1000).format("HHmm")),
						time
					];
					data.push(temp);
				});
				this.lastData = data[data.length - 1]; //更新最后一根柱子
				var hqdata = {
					Code: 0,
					data: data,
					name: "",
					symbol: this.symbol + "." + this.symbolType,
				};
				if (this.isapp) {
					callback({
						data: hqdata
					});
				} else {
					callback(hqdata);
				}
			},
			GetNextBarTime(ts, period) {
				if (period == -1) {
					return ts + 60;
				} else if (period == 0) {
					//日线
					return ts + 24 * 3600;
				} else if (period == 2) {
					//月线
					let dt = new Date();
					dt.setTime(ts * 1000);
					dt.setMonth(dt.getMonth() + 1);
					return Math.floor(dt.getTime() / 1000);
				} else {
					return ts + period * 60;
				}
			},

			GetBarBeginTime(ts, lastTs, period) {
				let rs = lastTs;
				while (true) {
					let nextTs = this.GetNextBarTime(rs, period);
					if (nextTs > ts) {
						break;
					}
					rs = nextTs;
				}
				return rs;
			},

			newPrice(price, lastTime) {
				var that = this
				// Throttle(function (price, ts) {
				// 	that.RecvMinuteRealtimeData(price, ts);
				// }, 500)(price, lastTime)
			},

			ecMore() {
				this.showA = !this.showA;
			},
			FolderMore() {
				this.showB = !this.showB;
			},

			RecvMinuteRealtimeData(price, ts) {
				//console.log('进入一分钟更新',recvData.data)
				// recvData = recvData.data;
				if (!this.GetJSChart()) {
					return;
				}
				if (this.lastData == null || this.lastData.length == 0) {
					return;
				}
				var internalChart = this.GetJSChart().JSChartContainer;

				var hqChartData = {
					code: 0,
					data: [],
					ver: 2.0
				}; //更新数据使用2.0版本格式

				if (
					ts >=
					this.GetNextBarTime(
						this.lastData[this.lastData.length - 1],
						this.period
					)
				) {
					let newBarTs = this.GetBarBeginTime(
						ts,
						this.lastData[this.lastData.length - 1],
						this.period
					);
					var dateTime = new Date();
					dateTime.setTime(newBarTs * 1000);
					var date =
						dateTime.getFullYear() * 10000 +
						(dateTime.getMonth() + 1) * 100 +
						dateTime.getDate();
					var time = dateTime.getHours() * 100 + dateTime.getMinutes();
					this.lastData = [date, 0, price, price, price, price, 0, 0, time, newBarTs];

					hqChartData.data.push(this.lastData);
					if (this.isapp) {
						internalChart.RecvMinuteRealtimeData({
							data: hqChartData
						});
					} else {
						internalChart.RecvMinuteRealtimeData(hqChartData);
					}
				} else {
					if (price < this.lastData[4]) {
						this.lastData[4] = price;
					}
					if (price > this.lastData[3]) {
						this.lastData[3] = price;
					}
					this.lastData[5] = price;
					hqChartData.data.push(this.lastData);
					if (this.isapp) {
						internalChart.RecvMinuteRealtimeData({
							data: hqChartData
						});
					} else {
						internalChart.RecvMinuteRealtimeData(hqChartData);
					}
					// internalChart.RecvMinuteRealtimeData(hqChartData);
				}
			},

			startAutoUpdate(event, data, obj) {
				//console.log('[startAutoUpdate] data', data);
			},
			stopAutoUpdate(event, data, obj) {
				//console.log('[stopAutoUpdate] data', data);
			},
		},
	};
</script>

<style>
	.horizontal {
		position: fixed;
		left: 0;
		top: 0;
		width: 100vw;
		height: 100vh;
		font-size: 28rpx;
		background-color: var(--panel-bg);
		z-index: 999;
	}

	.horizontal .kline {
		margin: 0 auto;
	}

	.horizontal .quote {
		position: absolute;
		width: 100vh;
		height: 60rpx;
		transform: rotate(90deg);
		transform-origin: left;
		left: calc(100% - 30rpx);
		line-height: 60rpx;
		top: -30rpx;
		z-index: 1000;
	}

	.horizontal .quote .quote-left,
	.horizontal .quote .quote-right {
		float: left;
	}

	.horizontal .quote .quote-right {
		margin-left: 80rpx;
	}

	.horizontal .quote .quote-left>view {
		float: left;
		margin-left: 30rpx;
	}

	.horizontal .quote .quote-right>view {
		float: left;
		margin-left: 100rpx;
	}

	.horizontal .quote .quote-left .zf {
		font-size: 24rpx;
	}

	.horizontal .ec-tabs {
		position: absolute;
		transform-origin: left top;
		transform: rotate(90deg);
		width: 100vh;
		left: 60rpx;
	}

	.caozuo {
		position: absolute;
		height: 700rpx;
		top: 100vh;
		right: 60rpx;
		width: 220rpx;
		height: 630rpx;
		transform-origin: right top;
		transform: rotate(90deg);
		background-color: var(--panel-bg);
		z-index: 1000;
	}

	.operator-panel {
		background: #0e1825;
		padding: 12px 0;
	}

	.caozuo>view {
		width: 110rpx;
		float: left;
		margin-top: 20rpx;
		text-align: center;
		border-top: 1px slid rgba($color: #000000, $alpha: 1);
	}

	.caozuo .title {
		position: relative;
	}

	.caozuo .title:after {
		position: absolute;
		left: calc(calc(100% - 30rpx) / 2);
		bottom: -5rpx;
		content: "";
		width: 30rpx;
		height: 2rpx;
		background-color: black;
	}

	.caozuo>view .content {
		margin-top: 10rpx;
		font-size: 26rpx;
		background-color: var(--panel-bg);
	}

	.caozuo .content .active {
		color: #2ab68b;
	}

	.echart-box {
		font-size: 0;

		image {
			width: 100%;
		}
	}

	.ec-tabs {
		position: relative;
		display: flex;
		align-items: center;
		text-align: center;
		height: 60rpx;
		font-size: 24rpx;
	}

	.col {
		width: 12.5%;
	}

	.ec-set {
		margin: 0 auto;
		width: 24rpx;
		height: 24rpx;
		background: url(@/static/images/kline/floder-set.png) no-repeat;
		background-size: contain;
	}

	.ec-more-item {
		position: relative;
	}

	.ec-more-item::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 40px;
		width: 0;
		height: 0;

		border-left: 6px solid transparent;
	}

	.ec-tab-bar {
		position: relative;
		box-shadow: 0 -2px 6px 1px var(--shadow-color);
		z-index: 1;
		background-color: #000;
	}

	.ex-popover {
		font-size: 24rpx;
		width: 100%;
		position: absolute;
	}

	.ex-popover .ec-tabs {
		border-bottom: 0;
		border-top: 0;
	}

	.ex-popover .ec-tabs .col {
		flex: 1;
		text-align: center;
	}

	.ec-filter {
		padding: 5px 15px;
		margin-bottom: 16px;
	}

	.ex-popover .iconfont {
		position: absolute;
		right: 15px;
		top: 10px;
	}

	.ec-filter .elabel {
		margin-bottom: 8px;
	}

	.filter-item {
		width: 76px;
		padding: 5px 0;
		text-align: center;
		background: #1b283f;
		margin-right: 8px;
		border: 1px solid #1b283f;
	}

	.filter-item.active {
		color: rgb(41, 121, 255);
		border: 1px solid rgb(41, 121, 255);
	}

	.ec-item {
		color: #8c9fad;
	}

	.ec-item.active {
		color: #0066ed;
	}
</style>
