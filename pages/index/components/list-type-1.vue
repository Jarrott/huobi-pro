<template>
	<view class="list">
		<view class="flex i-title">
			<view v-for="title in item.title" :class="['text']">
				<view v-if="title.titleProperty ==2" @click="toggle">{{title.titleName}}</view>
				<view v-else>{{title.titleName}}</view>
			</view>

			<view class="screenList ft-12" v-show="showSelect && item.screenListObject">
				<view class="s-item" 
					v-for="screenListObject in item.screenListObject"
					@click="selectType(screenListObject)"
				>{{screenListObject.screenTitle}}
				</view>
			</view>
		</view>

		<view v-for="single in ((item.type === 1 | item.type ===6) ? item.multipleMap[type] : item.singleList)">
			<view class="flex l-item" @click="gotoTrade(single)">
				<view class="text" v-if="item.type===2 || item.type===4">
					<text class="ft-14">{{single.currency}}</text>
				</view>
				<view class="text" v-else>
					<text class="ft-14">{{single.baseCurrency}}</text>
					<text class="ft-12 gray">/{{single.quoteCurrency}}</text>
				</view>
				<view class="text ft-12 bold">{{single.price}}</view>
				<view class="text flex">
					<button  v-if="item.type===2":class="['btn', 'ft-12', 'btn-vol', 'bold']">{{(single.volume/1000000).toFixed(0)}}M</button>
					<button
						v-else
						:class="['btn', 'ft-12', 
						{'btn-up': single.upAndDown> 0}, 
						{'btn-down': single.upAndDown<=0}] "
					>
						{{(single.upAndDown*100).toFixed(2)}}%
					</button>
					
				</view>
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
			}
		},
		data() {
			return {
				showSelect: false,
				type: 'btc',
			}
		},
		mounted() {

		},
		methods: {
			toggle() {
				this.showSelect = !this.showSelect;
			},
			selectType(item) {
				this.showSelect = false;
				this.type = item.screenValue;
			},
			gotoTrade(item) {
				uni.navigateTo({
					url: `/pages/trade/trade?symbol=${item.symbol}`,
				})
			}
		}
	}
</script>

<style scoped lang="scss">
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
