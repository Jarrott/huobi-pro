<template>
	<view class="info">
		<view class="card">
			<view class="title">BTC({{info.fullName}})</view>
			<view class="field">
				<view class="name">Ranking</view>
				<view class="value">{{info.sort}}</view>
			</view>
			<view class="field">
				<view class="name">Issue Time</view>
				<view class="value">{{info.publishTime?info.publishTime.slice(0, 11): '--'}}</view>
			</view>
			<view class="field">
				<view class="name">Total Amount</view>
				<view class="value">{{info.publishVolume}}</view>
			</view>
			<view class="field">
				<view class="name">Circulation</view>
				<view class="value">{{info.circulateVolume}}</view>
			</view>
			<view class="field">
				<view class="name">Market Capitalization</view>
				<view class="value"></view>
			</view>
			<view class="field">
				<view class="name">Negotiable Mark...</view>
				<view class="value"></view>
			</view>
			<view class="field">
				<view class="name">Price from Earli</view>
				<view class="value"></view>
			</view>
			<view class="field">
				<view class="name">All-time high</view>
				<view class="value">{{info.maxPrice}}</view>
			</view>
			<view class="field">
				<view class="name">All-time low</view>
				<view class="value">{{info.minPrice}}</view>
			</view>
		</view>
		<view class="card">
			<view class="title">
				Info.
			</view>
			<view>
				{{info.introduction}}
			</view>
			<view>

			</view>
		</view>
		<view class="card">
			<view class="title">
				Official Link
			</view>
			<view>
				<view>
					<uni-icons custom-prefix="iconfont" type="icon-computer" color="#fff" class="icon"></uni-icons> Official Website
					{{info.officialWebsite}}
				</view>
				<view>
					Blockchain Explorer
					{{info.blockQuery}}
				</view>
				<view>
					<uni-icons custom-prefix="iconfont" type="icon-github-fill" color="#fff" class="icon"></uni-icons> Github
					{{info.github}}
				</view>
			</view>
		</view>
		<view class="card">
			<view class="title">
				Online Community
			</view>
			<view>
				<uni-icons custom-prefix="iconfont" type="icon-telegram" color="rgb(41, 121, 255)" class="icon"></uni-icons>{{info.facebook}}
				<uni-icons custom-prefix="iconfont" type="icon-tuite" color="rgb(41, 121, 255)" class="icon"></uni-icons>
			</view>
			
		</view>
	</view>
</template>

<script>
	import moment from 'moment';
	import { getIntroductionDetail } from '@/api/trade.js';
	export default  {
		props: {
			currency: {
				type: String,
				default: 'btc',
			}
		},
		data() {
			return {
				info: {},
			}
		},
		mounted() {
			getIntroductionDetail ({
				currency: this.currency,
				lang: 'en-US'
			}).then(res=> {
				if (res.code ==200) {
					this.info = res.data;
					console.log(this.info)
				}
			});
		},
		methods: {
			
		},
		filters: {
			formateDate(value) {
				return moment(value).format('YYYY-MM-DD')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.card {
		margin-bottom: 20px;
	}
	.info {
		padding: 16px
	}
	.title {
		font-size: 18px;
		color: #fff;
		margin-bottom: 16px;
	}
	.field {
		line-height: 32px;
		height: 32px;
		display: flex;
		.name {
			flex: 1;
		}
	}
	.icon {
		color: #fff;
		margin-right: 8px;
	}
</style>
