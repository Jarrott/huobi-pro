<template>
	<view>
		<view class="status-bar"></view>
		<view class="container">
			<view class="user-info" @click="login">
				<image src="../../static/icon/me/avatar.png" class="avatar" />
				<view>
					<view class="username">Log in/Sign Up</view>
					<view class="uid">Welcome to Huobi</view>
				</view>
			</view>
			<view class="menu">
				<view class="item">
					<image src="../../static/icon/me/orders.png" class="icon"></image>
					<view>Orders</view>
				</view>
				<view class="item">
					<image src="../../static/icon/me/pnl.png" class="icon"></image>
					<view>PNL</view>
				</view>
				<view class="item">
					<image src="../../static/icon/me/support.png" class="icon"></image>
					<view>Support</view>
				</view>
				<view class="item">
					<image src="../../static/icon/me/fees.png" class="icon"></image>
					<view>Fees</view>
				</view>
			</view>
		</view>
		<view class="container">
			<view class="title"> Privileges</view>
			<view class="privilege">
				<view class="item">
					<view class="label">0.00 usdt</view>
					<view>
						Rebates
					</view>
				</view>
				<view class="item">
					<view class="label">0</view>
					<view>
						Coupons
					</view>
				</view>
				<view class="item">
					<view class="label">0.00</view>
					<view>
						Point Card
					</view>
				</view>
			</view>
		</view>
		<view class="container">
			<view class="title">Browsing History</view>
		</view>
		<view class="container">
			<view class="title">Services</view>
			<view class="menu menu-2">
				<view class="item">
					<image src="../../static/icon/me/vip.png" class="icon"></image>
					<view>Learn VIP</view>
				</view>
				<view class="item">
					<image src="../../static/icon/me/learn.png" class="icon"></image>
					<view>Huobi Learn</view>
				</view>
				<view class="item">
					<image src="../../static/icon/me/contact.png" class="icon"></image>
					<view>Contact CEO</view>
				</view>
				<view class="item">
					<image src="../../static/icon/me/nps.png" class="icon"></image>
					<view>NPS</view>
				</view>
				<view class="item">
					<image src="../../static/icon/me/community.png" class="icon"></image>
					<view>Huobi Community</view>
				</view>
				<view class="item">
					<image src="../../static/icon/me/live.png" class="icon"></image>
					<view>Live Center</view>
				</view>
			</view>
		</view>
		<view class="container">
			<view class="title">Tools</view>
			<view class="menu menu-2 menu-3">
				<view class="item">
					<image src="../../static/icon/me/ticker.png" class="icon"></image>
					<view>Ticker</view>
				</view>
				<view class="item">
					<image src="../../static/icon/me/alert.png" class="icon"></image>
					<view>Alert</view>
				</view>
				<view class="item">
					<image src="../../static/icon/me/chat.png" class="icon"></image>
					<view>My chat group</view>
				</view>
			</view>
		</view>
		<tab-bar />
	</view>
</template>

<script>
	import TabBar from '@/components/jacksin-fooBar/fooBar.vue'
	export default {
		components: {
			TabBar
		},
		data() {
			return {

			}
		},
		onShow() {},
		onLoad() {

		},
		methods: {
			login() {
				uni.navigateTo({
					url: '/pages/me/login',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		background: #fff;
		padding: 12px;
		margin-bottom: 8px;
	}

	.user-info {

		display: flex;
		align-items: center;
		margin-bottom: 12px;

		.avatar {
			width: 40px;
			height: 40px;
			border-radius: 40px;
			margin-right: 16px;
		}

		.username {
			font-size: 14px;
			font-weight: bold;
			color: #494949;
			margin-bottom: 4px;
		}

		.uid {
			font-size: 12px;
			color: #666;
		}

	}

	.menu {
		display: flex;
		margin: 0 -12px -12px;
		flex-wrap: wrap;

		.item {
			width: 25%;
			text-align: center;
			font-size: 12px;
			padding: 0 12px;
			box-sizing: border-box;
			margin-bottom: 12px;
		}

		.icon {
			width: 30px;
			height: 30px;
		}
	}

	.menu-2 {
		.icon {
			width: 40px;
			height: 40px;
		}
	}

	.menu-3 {
		.item {
			padding: 0;
		}
	}

	.title {
		font-size: 16px;
		font-weight: bold;
		color: #494949;
		margin-bottom: 16px;
	}

	.privilege {
		display: flex;

		.item {
			flex: 1;
			font-size: 12px;
			color: #666;

			.label {
				font-size: 14px;
				font-weight: bold;
				color: #494949;
				margin-bottom: 6px;
			}
		}
	}
</style>
