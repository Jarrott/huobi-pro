<template>
	<view>
		<view class="status-bar"></view>
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			:duration="duration">
			<swiper-item v-for="item in banner">
				<view class="swiper-item">
					<image :src="item.img"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="topSymbolPrice flex">
			<view v-for="(item, index) in topSymbolPrice" @click="gotoTrade(item)"
				:class="['t-item',{'up': item.upDown> 0}, {'down': item.upDown<=0}]">
				<view><text class="symbol ft-14 bold">{{item.baseCurrency}}/{{item.quoteCurrency}}</text><text
						class="ft-12">{{item.upDown>0? '+': ''}}{{(item.upDown*100).toFixed(2)}}%</text></view>
				<view class="ft-22">{{item.price}}</view>
				<view>${{(item.quotePrice*1).toFixed(2)}}</view>
				<kline :data="item.klineList" :upDown="item.upDown*1" :name="item.baseCurrency" />
			</view>
		</view>

		<view class="app-features-module">

			<view class="" v-for="item in appFeaturesModule" class="a-module">
				<view>
					<image :src="item.newImgUrl" class="icon"></image>
				</view>
				<view>{{item.title}}</view>

			</view>
		</view>
		<!-- <swiper class="swiper features-swiper" :indicator-dots="indicatorDots" :duration="duration">
			<swiper-item>
				<view class="swiper-item">
					
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="app-features-module">

						<view class="" v-for="item in appFeaturesModule.slice(11)" class="a-module">
							<view>
								<image :src="item.newImgUrl" class="icon"></image>
							</view>
							<view>{{item.title}}</view>

						</view>
					</view>
				</view>
			</swiper-item>
		</swiper> -->
		<view class="home-info">
			<view v-for="item in homeInfo" class="flex info-item">

				<view class="flex-1">
					<view class="title flex">
						<view class="ft-12 gray">{{item.title}} </view>
						<image :src="item.tagUrl" v-if="item.tagUrl" class="tag"></image>
					</view>
					<view class="ft-14">{{item.focusContent}}</view>
					<view class="ft-12 gray">{{item.summary.content}}</view>
				</view>
				<image :src="item.frontImageUrl" class="r-img"></image>
			</view>
		</view>
		<v-tabs v-model="current" :tabs="rankingList" field="typeTitle" @change="changeTab" :scroll="false"
			:lineAnimation="false" height="40px" lineHeight="2px"></v-tabs>
		<view v-for="item in rankingList">
			<!-- <view v-if="item.type ===5&& current==0" class="list">
				<view class="flex i-title">
					<view v-for="title in item.title" class="text">{{title.titleName}}</view>
				</view>
				<view v-for="single in item.singleList">
					<view class="flex l-item">
						<view class="text">
							<text class="ft-14">{{single.baseCurrency}}</text><text class="ft-12 gray">/{{single.quoteCurrency}}</text>
						</view>
						<view class="text ft-12 bold">{{single.price}}</view>
						<view class="text flex">
							<button :class="['btn', 'ft-12', {'btn-up': single.upAndDown> 0}, {'btn-down': single.upAndDown<=0}] ">{{(single.upAndDown*100).toFixed(2)}}%</button>
						</view>
					</view>
				</view>
						
			</view>
			 -->
			<list-type :item="item" v-if="item.type ===5&& current==0" />
			<list-type :item="item" v-if="item.type ===1 && current==1" />
			<list-type :item="item" v-if="item.type ===6 && current==2" />
			<!-- <view v-if="item.type ===6 && current==2" class="list">
				<view class="flex i-title">
					<view v-for="title in item.title" class="text">{{title.titleName}}</view>
				</view>
				<view v-for="single in item.multipleMap.usdt">
					<view class="flex l-item">
						<view class="text">
							<text class="ft-14">{{single.baseCurrency}}</text><text class="ft-12 gray">/{{single.quoteCurrency}}</text>
						</view>
						<view class="text ft-12 bold">{{single.price}}</view>
						<view class="text flex">
							<button :class="['btn', 'ft-12', {'btn-up': single.upAndDown> 0}, {'btn-down': single.upAndDown<=0}] ">{{(single.upAndDown*100).toFixed(2)}}%</button>
						</view>
					</view>
				</view>
						
			</view>
			 -->
			<list-type :item="item" v-if="item.type ===2 && current==3" />
			<list-type :item="item" v-if="item.type ===4 && current==4" />
			<!-- <view v-if="item.type ===2 && current==3" class="list">
				<view class="flex i-title">
					<view v-for="title in item.title" class="text">{{title.titleName}}</view>
				</view>
				<view v-for="single in item.singleList">
					<view class="flex l-item">
						<view class="text">
							<text class="ft-14">{{single.currency}}</text>
						</view>
						<view class="text ft-12 bold">{{single.price}}</view>
						<view class="text flex">
							
							<button :class="['btn', 'ft-12', 'btn-vol', 'bold']">{{(single.volume/1000000).toFixed(0)}}M</button>
						</view>
					</view>
				</view>
						
			</view>
			 -->
			<!-- <view v-if="item.type ===4 && current==4" class="list">
				<view class="flex i-title">
					<view v-for="title in item.title" class="text">{{title.titleName}}</view>
				</view>
				<view v-for="single in item.singleList">
					<view class="flex l-item">
						<view class="text">
							<text class="ft-14">{{single.currency}}</text>
						</view>
						<view class="text ft-12 bold">{{single.price}}</view>
						<view class="text flex">
							<button :class="['btn', 'ft-12', {'btn-up': single.upAndDown> 0}, {'btn-down': single.upAndDown<=0}] ">{{(single.upAndDown*100).toFixed(2)}}%</button>
						</view>
					</view>
				</view> -->

		</view>
		<!-- <tab-bar></tab-bar> -->
	</view>
	
</template>

<script>
	import {
		getBanner,
		getAppFeaturesModule,
		getRankingList,
		getTopSymbolPrice,
		getHomePageInfo,
	} from '../../api/index.js';
	import ListType from './components/list-type-1.vue';
	import Kline from './components/kline.vue'
	import TabBar from '@/components/tab-bar.vue'
	export default {
		components: {
			ListType,
			Kline,
			TabBar,
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				banner: [],
				rankingList: [],
				topSymbolPrice: [],
				current: 0,
				showSelect: false,
				appFeaturesModule: [{
					"id": 376,
					"title": "Deposit",
					"introduction": "",
					"imgUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/3b3e121c-1137-45da-a9e3-c103155f34df.png",
					"imgNightUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/9e9885f2-0dd2-4679-93b5-c526311fb911.png",
					"subUrl": "",
					"jumpMode": 8,
					"jumpUrl": "",
					"jumpSymbol": "",
					"weight": 106,
					"needLogin": 1,
					"androidVersion": "",
					"androidMinVersion": "",
					"iosVersion": "",
					"iosMinVersion": "",
					"description": "",
					"group": "Trade",
					"startTime": 0,
					"endTime": 0,
					"androidMaxVersion": "",
					"iosMaxVersion": "",
					"domainUrlBusiness": "",
					"countryBlackList": "",
					"newImgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/71db2a18-ed6a-4cd4-b96c-6b9e9a1774d6.png",
					"groupCode": "充币",
					"homePageFixed": 1,
					"homePageFixedIndex": 106,
					"newModule": null,
					"sort": null
				}, {
					"id": 377,
					"title": "Chat",
					"introduction": "",
					"imgUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/cf934879-fad2-41e9-86f0-c5a2fc54090a.png",
					"imgNightUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/37a770ce-b00c-4675-99bf-1738415b04d9.png",
					"subUrl": "",
					"jumpMode": 7,
					"jumpUrl": "",
					"jumpSymbol": "",
					"weight": 91,
					"needLogin": 0,
					"androidVersion": "",
					"androidMinVersion": "",
					"iosVersion": "",
					"iosMinVersion": "",
					"description": "",
					"group": "Service",
					"startTime": 0,
					"endTime": 0,
					"androidMaxVersion": "",
					"iosMaxVersion": "",
					"domainUrlBusiness": "",
					"countryBlackList": "",
					"newImgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/8e48e298-7460-4b1d-abcf-088fee084083.png",
					"groupCode": "客服",
					"homePageFixed": 0,
					"homePageFixedIndex": 0,
					"newModule": null,
					"sort": 26384
				}, {
					"id": 682,
					"title": "Crypto Loans",
					"introduction": "",
					"imgUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/f5642537-a7b5-47c9-9036-e18fa293d44f.png",
					"imgNightUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/9bba46a7-3ffc-4cf2-af95-435885c47c27.png",
					"subUrl": "",
					"jumpMode": 1,
					"jumpUrl": "https://pledge.huobi.co.ma/pledge/?hideNav=1",
					"jumpSymbol": "",
					"weight": 87,
					"needLogin": 1,
					"androidVersion": "6.4.4|6.4.3|6.4.2|6.4.1|6.4.0|6.3.9|6.3.8|",
					"androidMinVersion": "",
					"iosVersion": "6.4.4|6.4.3|6.4.2|6.4.1|6.4.0|6.3.9|6.3.8|",
					"iosMinVersion": "",
					"description": "",
					"group": "Finance",
					"startTime": 0,
					"endTime": 0,
					"androidMaxVersion": "",
					"iosMaxVersion": "",
					"domainUrlBusiness": "质押借贷",
					"countryBlackList": "",
					"newImgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/f11e8780-6e60-4022-b823-0bd48474afa4.png",
					"groupCode": "质押借币",
					"homePageFixed": 0,
					"homePageFixedIndex": 0,
					"newModule": null,
					"sort": 26387
				}, {
					"id": 1014,
					"title": "Huobi NFT",
					"introduction": "",
					"imgUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/8d43564f-9814-4460-8c60-99da9c14bc7d.png",
					"imgNightUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/d87989b0-7843-4a37-8e78-6cf3915eb324.png",
					"subUrl": "",
					"jumpMode": 1,
					"jumpUrl": "https://nft.huobi.co.ma/en-us",
					"jumpSymbol": "",
					"weight": 108,
					"needLogin": 0,
					"androidVersion": "",
					"androidMinVersion": "",
					"iosVersion": "",
					"iosMinVersion": "",
					"description": "",
					"group": "Trade",
					"startTime": 0,
					"endTime": 0,
					"androidMaxVersion": "",
					"iosMaxVersion": "",
					"domainUrlBusiness": "火币NFT",
					"countryBlackList": "",
					"newImgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/bd6c3a49-4a23-46aa-a79f-625debea5d2a.png",
					"groupCode": "火币NFT",
					"homePageFixed": 1,
					"homePageFixedIndex": 108,
					"newModule": null,
					"sort": null
				}, {
					"id": 1336,
					"title": "Options",
					"introduction": "",
					"imgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/d3fdb76d-0a7d-435f-bb6e-0eaad98ccc5a.png",
					"imgNightUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/3737a54d-1413-4550-9640-fc2cd5314e24.png",
					"subUrl": "",
					"jumpMode": 35,
					"jumpUrl": "",
					"jumpSymbol": "",
					"weight": 95,
					"needLogin": 1,
					"androidVersion": "",
					"androidMinVersion": "",
					"iosVersion": "",
					"iosMinVersion": "",
					"description": "",
					"group": "Trade",
					"startTime": 0,
					"endTime": 0,
					"androidMaxVersion": "",
					"iosMaxVersion": "",
					"domainUrlBusiness": "",
					"countryBlackList": "",
					"newImgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/fc66f78c-0b29-43ee-be43-744aa6b4d275.png",
					"groupCode": "期权",
					"homePageFixed": 0,
					"homePageFixedIndex": 0,
					"newModule": null,
					"sort": 26381
				}, {
					"id": 1523,
					"title": "Margin",
					"introduction": "",
					"imgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/721e39eb-bca0-4fa0-935a-90a3328e3eb1.png",
					"imgNightUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/d255ea72-7b72-4315-9bbf-1a3e056b9b35.png",
					"subUrl": "",
					"jumpMode": 20,
					"jumpUrl": "",
					"jumpSymbol": "",
					"weight": 93,
					"needLogin": 1,
					"androidVersion": "",
					"androidMinVersion": "",
					"iosVersion": "",
					"iosMinVersion": "",
					"description": "",
					"group": "Trade",
					"startTime": 0,
					"endTime": 0,
					"androidMaxVersion": "",
					"iosMaxVersion": "",
					"domainUrlBusiness": "",
					"countryBlackList": "",
					"newImgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/024f3d7b-511c-4a17-a4d6-eb06c4042e68.png",
					"groupCode": "杠杆",
					"homePageFixed": 0,
					"homePageFixedIndex": 0,
					"newModule": null,
					"sort": 26382
				}, {
					"id": 1558,
					"title": "Rewards Hub",
					"introduction": "",
					"imgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/203e00c0-eab8-4953-bfa7-54a897374166.png",
					"imgNightUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/0113498f-db7a-4ec1-84c3-390c787419d7.png",
					"subUrl": "",
					"jumpMode": 1,
					"jumpUrl": "https://www.huobi.co.ma/en-us/topic/welfare/h5/",
					"jumpSymbol": "",
					"weight": 98,
					"needLogin": 1,
					"androidVersion": "",
					"androidMinVersion": "",
					"iosVersion": "",
					"iosMinVersion": "",
					"description": "",
					"group": "Activities and Bonus",
					"startTime": 0,
					"endTime": 0,
					"androidMaxVersion": "",
					"iosMaxVersion": "",
					"domainUrlBusiness": "主站域名",
					"countryBlackList": "",
					"newImgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/caed9786-f83e-46cb-afb1-c06bc0687ed7.png",
					"groupCode": "福利中心",
					"homePageFixed": 0,
					"homePageFixedIndex": 0,
					"newModule": null,
					"sort": null
				}, {
					"id": 373,
					"title": "Referral",
					"introduction": "",
					"imgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/2bac795e-0ddf-4f15-81b1-6b2581849e75.png",
					"imgNightUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/700e9ccd-f9a3-44eb-9cea-c5dfd395e1ca.png",
					"subUrl": "",
					"jumpMode": 1,
					"jumpUrl": "https://www.huobi.co.ma/en-us/double-invite-retail/h5",
					"jumpSymbol": "",
					"weight": 96,
					"needLogin": 0,
					"androidVersion": "6.8.6|6.8.5|6.8.4|6.8.3|6.8.2|6.8.1|6.8.0|",
					"androidMinVersion": "",
					"iosVersion": "6.8.5|6.8.4|6.8.3|6.8.2|6.8.1|6.8.0|6.7.9|",
					"iosMinVersion": "",
					"description": "",
					"group": "Activities and Bonus",
					"startTime": 0,
					"endTime": 0,
					"androidMaxVersion": "",
					"iosMaxVersion": "",
					"domainUrlBusiness": "主站域名",
					"countryBlackList": "",
					"newImgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/58697a69-a748-4af1-8baa-e0f7c5efbdfa.gif",
					"groupCode": "邀请返佣",
					"homePageFixed": 0,
					"homePageFixedIndex": 0,
					"newModule": null,
					"sort": null
				}, {
					"id": 381,
					"title": "Earn",
					"introduction": "",
					"imgUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/06fee7d0-c0b5-41ea-91da-8713481655e9.png",
					"imgNightUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/aa3ee4c6-fb41-4968-b813-d2612f25160f.png",
					"subUrl": "",
					"jumpMode": 1,
					"jumpUrl": "https://www.huobi.co.ma/en-us/financial/earnings/h5",
					"jumpSymbol": "",
					"weight": 97,
					"needLogin": 1,
					"androidVersion": "",
					"androidMinVersion": "",
					"iosVersion": "",
					"iosMinVersion": "",
					"description": "",
					"group": "Finance",
					"startTime": 0,
					"endTime": 0,
					"androidMaxVersion": "",
					"iosMaxVersion": "",
					"domainUrlBusiness": "主站域名",
					"countryBlackList": "",
					"newImgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/72fb9eac-1740-4938-933f-dee9d04bda37.png",
					"groupCode": "Huobi Earn",
					"homePageFixed": 0,
					"homePageFixedIndex": 0,
					"newModule": null,
					"sort": 26380
				}, {
					"id": 382,
					"title": "ETH 2.0",
					"introduction": "",
					"imgUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/3585291e-9f34-4380-b3d9-59be766de553.png",
					"imgNightUrl": "https://huobi-1253283450.file.myqcloud.com/bit/appFeatures/efe7652e-d37a-43d9-af64-22e67c0b83da.png",
					"subUrl": "",
					"jumpMode": 1,
					"jumpUrl": "https://pool.huobi.co.ma/pool/en-us/topic/eth/h5?refresh=2&color=060C30&hideNav=1",
					"jumpSymbol": "",
					"weight": 88,
					"needLogin": 0,
					"androidVersion": "",
					"androidMinVersion": "",
					"iosVersion": "",
					"iosMinVersion": "",
					"description": "",
					"group": "Finance",
					"startTime": 0,
					"endTime": 0,
					"androidMaxVersion": "",
					"iosMaxVersion": "",
					"domainUrlBusiness": "",
					"countryBlackList": "",
					"newImgUrl": "https://huobi-1306115679.file.myqcloud.com/bit/appFeatures/50b5bea9-4c8b-472c-9c27-787574afdb0b.png",
					"groupCode": "以太坊2.0",
					"homePageFixed": 0,
					"homePageFixedIndex": 0,
					"newModule": null,
					"sort": 26386
				}, ],
				homeInfo: [{
					"id": 13,
					"show": 1,
					"flag": 1,
					"type": 1,
					"name": "Primelist-新",
					"sort": 1,
					"title": "Newlisting",
					"summary": {
						"content": "625,000 VLX giveaways",
						"color": ""
					},
					"imageUrl": "https://download.hbfile.net/hbg/img/9416a8a7db80c48d4fa2ba339c3f9410.png",
					"frontImageUrl": "https://download.hbfile.net/hbg/img/9416a8a7db80c48d4fa2ba339c3f9410.png",
					"bgImageUrl": "",
					"tagUrl": "https://download.hbfile.net/hbg/img/7425afe8ef9d94777e440f83c691ea96.png",
					"url": {
						"jumpMode": 1,
						"jumpUrl": "https://www.huobi.co.nl/en-us/topic/newlisting",
						"jumpSymbol": null,
						"title": "Newlisting",
						"needLogin": 0
					},
					"focusType": 1,
					"focusContent": "48-hr time offer",
					"beginTime": 1652947346858,
					"endTime": 0,
					"style": 1
				}, {
					"id": 5,
					"show": 1,
					"flag": 1,
					"type": 1,
					"name": "Top Up-新版本",
					"sort": 2,
					"title": "Top Up",
					"summary": {
						"content": "Better Prices",
						"color": ""
					},
					"imageUrl": "https://download.hbfile.net/hbg/img/2a1558cd1b9913e85cd51563a9f92f71.png",
					"frontImageUrl": "https://download.hbfile.net/hbg/img/3357f05280dabde62f00b8fa62913272.png",
					"bgImageUrl": "",
					"tagUrl": "",
					"url": {
						"jumpMode": 39,
						"jumpUrl": "",
						"jumpSymbol": null,
						"title": "Top Up",
						"needLogin": 0
					},
					"focusType": 1,
					"focusContent": "Deposit/Buy",
					"beginTime": 1652947346858,
					"endTime": 0,
					"style": 1
				}]

			}
		},
		onShow() {
			this.getBanner();
			// getAppFeaturesModule({
			// 	platform: 2,
			// 	version: 697,
			// 	nightMode: 0,
			// 	uid: 0,
			// 	moduleSize: 20,
			// 	ts: 0
			// }).then(res => {
			// 	if (res.code == 200) {
			// 		this.appFeaturesModule = res.data.contentList;
			// 	}
			// })
			this.getRankingList();
			getHomePageInfo({
				nightMode: 0,
			}).then(res => {
				console.log(res);
			})
			getTopSymbolPrice().then(res => {
				if (res.code === 200) {
					this.topSymbolPrice = res.data.slice(0, 3);
				}
			})
		},
		onPullDownRefresh() {
			this.getProduct();
		},
		methods: {
			gotoTrade(item) {
				uni.navigateTo({
					url: `/pages/trade/trade?symbol=${item.symbol}`,
				})
			},
			toggle() {
				this.showSelect = !this.showSelect;
			},

			getRankingList() {
				// setInterval(()=> {

				// }, 5000);
				getRankingList().then(res => {
					if (res.code === 200) {
						this.rankingList = res.data;
					}
				})
			},
			getBanner() {
				getBanner().then(res => {
					if (res.code === 200) {
						this.banner = res.data.adList
					}
				}).catch(error => {})
			},
			getProduct() {
				getProduct().then(res => {
					this.productList = res.product_module;
				}).catch(error => {
					console.log(error)
				})
			},
			getTips() {
				getTips().then(res => {
					console.log(res);
					this.tips = res[0].comment;
				}).catch(error => {
					console.log(error)
				})
			},
			bet(item, title) {
				if (item.type === 3) {
					uni.navigateTo({
						url: `/pages/product/hash/hash?id=${item.id}&title=${title}`
					})
				} else if (item.type == 1) {
					uni.navigateTo({
						url: `/pages/product/luck/luck?id=${item.id}&title=${title}`
					})
				}

			},
			changeTab(value) {
				this.current = value;
			},
		},
		filters: {

		}
	}
</script>

<style scoped lang="scss">
	/deep/.uni-swiper-dot {
		display: none;
		border-radius: 0;
		height: 3px;
		width: 6px;
		background: rgb(231, 234, 238);
		margin-right: 2px;
	}

	/deep/.uni-swiper-dot-active {
		width: 10px;
		background: rgb(185, 187, 194);
	}

	.features-swiper {
		background: #fff;
		margin-bottom: 12px;
		padding: 12px 0;
		height: 150px;


	}

	.home-info {
		background: #fff;
		margin-bottom: 12px;
		padding: 0;
		display: grid;
		grid-gap: 0 0;
		grid-template-columns: repeat(2, 50%);

		.info-item {
			padding-top: 12px;
			align-items: flex-start;
			padding-left: 12px;
			border-bottom: 1px solid #efefef;

			&:nth-child(2n+1) {
				border-right: 1px solid #efefef;
			}
		}

		.r-img {
			width: 60px;
			height: 60px;
		}

		.tag {
			width: 30px;
			height: 15px;
			margin-left: 8px;
		}
	}

	.app-features-module {
		display: grid;
		grid-gap: 12px 1%;
		grid-template-columns: repeat(5, 19%);
		font-size: 10px;
		text-align: center;
		background-color: #fff;
		margin-bottom: 12px;
		padding: 12px 0;

		.a-module {}

		.icon {
			width: 30px;
			height: 30px;
		}
	}

	.topSymbolPrice {
		justify-content: space-between;
		padding: 10px 16px 6px;
		margin-bottom: 10px;
		background: #fff;

		.t-item {
			.symbol {
				text-transform: uppercase;
				color: #494949;
			}

			&.up {
				color: rgb(96, 170, 142);
			}

			&.down {
				color: rgb(162, 51, 74);
			}

			width: 33.3%;
		}
	}

	.list {
		padding: 16px;
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

	.ft-22 {
		font-size: 22px;
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

	.btn-login {
		background: rgb(74, 131, 252);
	}

	.game-list {
		padding: 12px;

	}

	.list-title {
		font-size: 18px;
		color: #fff;
		margin-bottom: 12px;
	}

	.game-item {
		padding: 12px;
		background: rgb(44, 47, 75);
		border-radius: 4px;
		color: #fff;
		margin-bottom: 12px;

		.name {
			font-size: 16px;
			margin-bottom: 18px;
		}

		.money {
			color: rgb(147, 151, 176);
			font-size: 12px;
		}

		.rate {
			color: rgb(85, 142, 250);
			font-size: 12px;
		}

		.btn {
			background: rgb(74, 131, 252);
			margin: 0;
		}

	}

	.game-image {
		width: 120px;
		height: 80px;
		margin-right: 12px;
		border-radius: 4px;
	}

	uni-swiper {
		width: 100%;
	}

	.swiper-item uni-image {
		width: 100%;
		height: 180px;

	}

	.swiper-item {
		padding: 0 0px;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.notice {
		width: 100%;
	}

	.user-info {
		color: #fff;
		padding: 12px;
		text-align: left;

	}

	.icon {
		width: 24px;
		height: 22px;
	}

	.username {
		flex: 1;
	}

	.wallet .flex-1 {
		margin-left: 12px;
		text-align: center;
		float: right;
		min-width: 40px;
	}
</style>
