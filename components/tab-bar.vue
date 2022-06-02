<template>
	<view class="tab-bar">
		<view class="item" @tap="switchTab()">
			<view class="icon">
				<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M21.426 2.946l.133.073.343.21c.06.038.1.066.12.083 7.131 5.73 5.302 13.385 4.393 17.19-.165.69-.3 1.253-.345 1.655-.176 1.549.91 1.995 1.81.815 1.28-1.677 2.037-4.175 2.272-7.495a1.754 1.754 0 012.362-1.522c4.856 2.91 7.528 7.33 8.017 13.264.056.402.084.849.084 1.344l-.004.367.002.447h-.017c-.424 8.83-7.692 15.857-16.596 15.857-9.176 0-16.615-7.464-16.615-16.671 0-3.356.988-6.48 2.688-9.096l.264-.397.052-.07c.234-.337.482-.665.741-.983l.86-1.149c1.934-2.602 3.366-4.641 4.298-6.12 1.098-1.741 1.938-3.923 2.52-6.546a1.847 1.847 0 012.482-1.316l.136.06zm.15 5.1l-.053.16c-.572 1.677-1.273 3.181-2.111 4.51l-.31.485c-.972 1.5-2.337 3.431-4.104 5.81l-.917 1.226-.088.113a12.83 12.83 0 00-.39.504l-.212.293-.054.08a12.93 12.93 0 00-2.255 6.956l-.005.38c0 7.17 5.789 12.979 12.923 12.979 6.8 0 12.414-5.291 12.89-12.047l.018-.294.01-.241.005-.397c0-.262-.011-.494-.032-.696l-.04-.345c-.279-3.385-1.38-6.054-3.366-8.137l-.125-.127-.067.317c-.472 2.1-1.22 3.89-2.275 5.364l-.202.272c-3.227 4.231-9.004 1.717-8.415-3.47.046-.403.12-.794.247-1.351l.39-1.658.043-.19c.7-3.145.774-5.571-.03-7.841a9.151 9.151 0 00-1.354-2.5l-.122-.154zM24 28.619a5.538 5.538 0 110 11.077 5.538 5.538 0 010-11.076zm0 3.508a2.03 2.03 0 100 4.062 2.03 2.03 0 000-4.062z"
						fill="#62666B" />
				</svg>
			</view>
			<view class="text">
				火币
			</view>
		</view>
		<view class="item" @tap="switchTab()">
			<view class="icon">
				<svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M28.037 3.072l11.968 6.881a7.994 7.994 0 014.016 6.928v13.763c0 2.858-1.531 5.499-4.017 6.928l-11.967 6.881a8.061 8.061 0 01-8.032 0L8.037 37.572a7.994 7.994 0 01-4.016-6.928V16.88c0-2.858 1.53-5.499 4.016-6.928l11.967-6.881a8.061 8.061 0 018.033 0zm-1.923 3.464a4.039 4.039 0 00-3.81-.113l-.21.113-11.98 6.881a3.998 3.998 0 00-2.004 3.24l-.006.224v13.763c0 1.353.688 2.61 1.818 3.346l.192.118 11.98 6.88a4.039 4.039 0 003.81.113l.21-.112 11.98-6.881a3.997 3.997 0 002.004-3.24l.006-.224V16.88c0-1.354-.688-2.61-1.818-3.346l-.192-.118-11.98-6.881zm-3.388 13.047l5.36.8c-1.284 1.738-2.606 3.211-3.962 4.42a22.663 22.663 0 01-8.079 4.65c-1.068.352-1.647 1.487-1.293 2.535.355 1.049 1.508 1.614 2.577 1.262a26.775 26.775 0 009.528-5.485c2.75-2.45 5.302-5.753 7.669-9.903a1.98 1.98 0 00-.78-2.724 2.068 2.068 0 00-1.947-.02 1.09 1.09 0 00-.082.023l-9.106 2.89c-.81.256-.723 1.427.115 1.552z"
						fill="#62666B" />
				</svg>
			</view>
			<view class="text">
				火币
			</view>
		</view>
		<view class="item" @tap="switchTab()">
			<view class="icon">
				<svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
					<mask id="a" maskUnits="userSpaceOnUse" x="2" y="0" width="44" height="48">
						<path fill="#fff" d="M2.502.503h43.215v47.235H2.502z" />
					</mask>
					<g mask="url(#a)">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M36.69 13.49a2.01 2.01 0 103.824-1.241 12.037 12.037 0 00-7.197-7.552l1.527-1.156a1.37 1.37 0 00-1.107-2.433c-2.271.476-3.996.96-5.173 1.453-1.584.663-2.85 1.389-3.8 2.177a.488.488 0 00-.115.137 2.01 2.01 0 001.91 3.454 8.04 8.04 0 0110.132 5.162zm-11.786-.5a12.054 12.054 0 00-10.341-5.852c-6.661 0-12.06 5.4-12.06 12.06 0 5.984 4.358 10.95 10.074 11.898a18.416 18.416 0 01.24-4.048 8.04 8.04 0 118.41-12.348 18.01 18.01 0 013.677-1.71zm20.814 17.16c0-8.326-6.75-15.075-15.076-15.075-8.325 0-15.074 6.75-15.074 15.075 0 8.326 6.749 15.075 15.074 15.075 8.326 0 15.076-6.75 15.076-15.075zm-26.13 0c0-6.105 4.949-11.055 11.054-11.055 6.106 0 11.055 4.95 11.055 11.055 0 6.105-4.949 11.055-11.055 11.055-6.105 0-11.055-4.95-11.055-11.055zm16.918 1.76a1.91 1.91 0 00-2.7.017c-.974.987-1.998 1.442-3.163 1.442-1.166 0-2.19-.455-3.164-1.442a1.91 1.91 0 10-2.718 2.682c1.671 1.694 3.662 2.579 5.881 2.579 2.22 0 4.211-.885 5.882-2.579a1.91 1.91 0 00-.018-2.7zm-30.718-.828c1.11 0 2.01.9 2.01 2.01 0 4.44 3.6 8.04 8.04 8.04a2.01 2.01 0 01.7 3.895.499.499 0 01-.126.072c-1.147.456-2.576.755-4.287.896-1.272.105-3.062.033-5.369-.217a1.37 1.37 0 01-.301-2.656l1.824-.632a12.037 12.037 0 01-4.501-9.398c0-1.11.9-2.01 2.01-2.01z"
							fill="#62666B" />
					</g>
				</svg>
				</svg>
			</view>
			<view class="text">
				火币
			</view>
		</view>
	</view>
</template>

<script>
	import indexIcon from '@/static/icon/index.svg';
	export default {
		name: "tab-bar",
		data() {
			return {
				list: [{
					"pagePath": "pages/index/index",
					"iconPath": indexIcon,
					"selectedIconPath": "2/static/icon/index-active.svg",
					"text": "huobi"
				}, {
					"pagePath": "pages/index/index",
					"iconPath": "@/static/icon/market.svg",
					"selectedIconPath": "@/static/icon/market-active.svg",
					"text": "Markets"
				}, {
					"pagePath": "pages/index/index",
					"iconPath": "@/static/icon/exchange.svg",
					"selectedIconPath": "@/static/icon/exchange-active.svg",
					"text": "Trade"
				}, {
					"pagePath": "pages/index/index",
					"iconPath": "@/static/icon/dm.svg",
					"selectedIconPath": "@/static/icon/dm-active.svg",
					"text": "Derivatives"
				}, {
					"pagePath": "pages/my/my",
					"iconPath": "@/static/icon/fiance.svg",
					"selectedIconPath": "@/static/icon/fiance-active.svg",
					"text": "Assets"
				}, {
					"pagePath": "pages/me/me",
					"iconPath": "@/static/icon/fiance.svg",
					"selectedIconPath": "@/static/icon/fiance-active.svg",
					"text": "Me"
				}],
			}
		},
		props: {
			current: {
				type: [Number, String],
				default: 0
			},
		},
		methods: {
			switchTab(index) {
				this.currentTabIndex = index
				this.$emit('click', index)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.tab-bar {
		display: flex;
		position: fixed;
		left: var(--window-left);
		right: var(--window-right);
		justify-content: center;
		height: 50px;
		background-color: rgb(247, 247, 250);
		bottom: 0;

		.item {
			height: 50px;
			flex: 1;
			text-align: center;

			.icon {
				width: 24px;
				height: 24px;
				position: relative;
				display: inline-block;
				margin-top: 5px;

				.img {
					width: 24px;
					height: 24px;
				}
			}

			.label {
				font-size: 10px;
				line-height: normal;
				margin-top: 3px;
				position: relative;
				text-align: center;
			}
		}
	}
</style>
