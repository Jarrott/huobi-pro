<template>
	<view class="bottom" id="content">
		
		
		<view class="tabbar">
			<view class="tabbar__item" :class="{'on':home===0}" @click="toIndex(0)">
				<view class="tabbar__svg" id="home"></view>
				<view class="tabbar__name tabbar__home">首页</view>
			</view>
			<view class="tabbar__item" :class="{'on':home===1}" @click="toIndex(1)">
				<view class="tabbar__svg" id="cate"></view>
				<view class="tabbar__name">探索</view>
			</view>
			<view class="tabbar__item" :class="{'on':home===2}" @click="toIndex(2)">
				<view class="tabbar__svg" id="shop">
					
				</view>
				<view class="tabbar__name">尬聊</view>
			</view>
			<view class="tabbar__item" :class="{'on':home===3}" @click="toIndex(3)">
				<view class="tabbar__svg" id="user">
					
				</view>
				<view class="tabbar__name">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				home: 0,
			}
		},
		onLoad() {

		},
		methods: {
			toPage(url) {
				uni.navigateTo({
					url
				})
			},
			toIndex(index) {
				this.$emit('toIndex', index)
				this.home = index
			}
		}
	}
</script>

<script module="svgs" lang="renderjs">
	let myChart
	export default {
		mounted() {
			if (typeof window.svgs === 'function') {
				this.initSvgs()
			} else {
				// 动态引入较大类库避免影响页面展示
				const script = document.createElement('script')
				// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
				script.src = 'static/svg.js'
				script.onload = this.initSvgs.bind(this)
				document.head.appendChild(script)
			}
		},
		methods: {
			initSvgs() {
				//图标颜色渐变
				var draw = SVG().addTo('#content').size(0, 0);
				var defs = draw.defs().id('gradient');
				var gradientpink = defs.gradient('linear',function(add) {
					add.stop(0,'#F96C81')
					add.stop(1, '#FFB2C1')
				}).attr({x1:55.4167, y1:7.29167, x2:15.3125, y2:60.5208, gradientUnits:'userSpaceOnUse' })
				var gradientyellow = defs.gradient('linear',function(add) {
					add.stop(0,'#FED966')
					add.stop(1, '#FFECB0')
				}).attr({x1:55.4167, y1:7.29167, x2:15.3125, y2:60.5208, gradientUnits:'userSpaceOnUse' })
				var gradientblue = defs.gradient('linear',function(add) {
					add.stop(0,'#4ab4ff')
					add.stop(1, '#5182fb')
				}).attr({x1:55.4167, y1:7.29167, x2:15.3125, y2:60.5208, gradientUnits:'userSpaceOnUse' })
				
				//home-icon首页图标
				var homesvg = SVG().addTo('#home').size(24, 24).attr({ viewBox:'0 0 48 48' }).fill('none').id('home-no');
				var homeclip = homesvg.clip();
				homeclip.path('M27.9774 1.12273C25.5352 -0.37424 22.4648 -0.374244 20.0226 1.12272L6.00262 9.71614C2.44202 11.5204 0 15.2271 0 19.5068L2 37.0411C3 43 6.97507 48 13 48H35C41.0249 48 45 43 46 37.0411L48 19.5068C48 15.2271 45.558 11.5204 41.9974 9.71615L27.9774 1.12273Z').fill('#4a4e57').id('home-clip-path');
				var homeg = homesvg.group();
				homeg.clipWith(homeclip);
				homeg.path('M27.9774 1.12273C25.5352 -0.37424 22.4648 -0.374244 20.0226 1.12272L6.00262 9.71614C2.44202 11.5204 0 15.2271 0 19.5068L2 37.0411C3 43 6.97507 48 13 48H35C41.0249 48 45 43 46 37.0411L48 19.5068C48 15.2271 45.558 11.5204 41.9974 9.71615L27.9774 1.12273Z').stroke('#4a4e57').stroke({ width: 8 }).id('home-border');
				var homepink = homeg.group().attr({ class:'transition_move1' });;
				homepink.circle(70).fill(gradientpink).move(-11, -11);
				var homeyellow = homeg.group().attr({ class:'transition_move2' });;
				homeyellow.circle(70).fill(gradientyellow).move(-11, -11);
				var homeblue = homeg.group().attr({ class:'transition_move3' });;
				homeblue.circle(70).fill(gradientblue).move(-11, -11);
				homeg.path('M31 28C31 31.866 27.866 35 24 35C20.134 35 17 31.866 17 28C17 24.134 20.134 21 24 21C27.866 21 31 24.134 31 28Z').id('home-circle').stroke('#4a4e57').stroke({ width: 4 });
							
				//cate-icon探索图标
				var catesvg = SVG().addTo('#cate').size(24, 24).attr({ viewBox:'0 0 48 48' }).fill('none');
				var cateclip = catesvg.clip();
				cateclip.path('M0 14.5714C0 7.62842 5.60617 2 12.5217 2H35.4783C42.3938 2 48 7.62842 48 14.5714V33.4286C48 40.3716 42.3938 46 35.4783 46H12.5217C5.60617 46 0 40.3716 0 33.4286V14.5714Z').fill('#4a4e57').id('explore-clip-path');
				var categ = catesvg.group();
				categ.clipWith(cateclip)
				categ.path('M0 14.5714C0 7.62842 5.60617 2 12.5217 2H35.4783C42.3938 2 48 7.62842 48 14.5714V33.4286C48 40.3716 42.3938 46 35.4783 46H12.5217C5.60617 46 0 40.3716 0 33.4286V14.5714Z').stroke('#4a4e57').stroke({ width: 8 }).id('explore-border');
				var catepink = categ.group().attr({ class:'transition_move1' });;
				catepink.circle(70).fill(gradientpink).move(-11, -11);
				var cateellow = categ.group().attr({ class:'transition_move2' });;
				cateellow.circle(70).fill(gradientyellow).move(-11, -11);
				var cateblue = categ.group().attr({ class:'transition_move3' });;
				cateblue.circle(70).fill(gradientblue).move(-11, -11);
				categ.path('M19.4845 19.2494C19.4845 18.4796 20.3178 17.9984 20.9845 18.3833L30.1441 23.6717C30.8108 24.0566 30.8108 25.0188 30.1441 25.4037L20.9845 30.692C20.3178 31.0769 19.4845 30.5958 19.4845 29.826V19.2494Z').id('explore-arrow').stroke('#4a4e57').stroke({ width: 4 });
						
				//shop-icon消息图标
				var shopsvg = SVG().addTo('#shop').size(24, 24).attr({ viewBox:'0 0 48 48' }).fill('none');
				var shopclip = shopsvg.clip();
				shopclip.path('M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 30.5467 2.62123 36.4811 6.87143 40.8111L4.74164 44.5C3.97184 45.8333 4.93408 47.5 6.47369 47.5L23.5 48C23.5 48 23.5035 47.9983 23.5102 47.9951C23.673 47.9984 23.8363 48 24 48Z').fill('#4a4e57').id('chat-clip-path');
				var shopg = shopsvg.group();
				shopg.clipWith(shopclip)
				shopg.path('M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 30.5467 2.62123 36.4811 6.87143 40.8111L4.74164 44.5C3.97184 45.8333 4.93408 47.5 6.47369 47.5L23.5 48C23.5 48 23.5035 47.9983 23.5102 47.9951C23.673 47.9984 23.8363 48 24 48Z').stroke('#4a4e57').stroke({ width: 8 }).id('chat-border');
				var shoppink = shopg.group().attr({ class:'transition_move1' });;
				shoppink.circle(70).fill(gradientpink).move(-11, -11);
				var shopellow = shopg.group().attr({ class:'transition_move2' });;
				shopellow.circle(70).fill(gradientyellow).move(-11, -11);
				var shopblue = shopg.group().attr({ class:'transition_move3' });
				shopblue.circle(70).fill(gradientblue).move(-11, -11);
				shopg.circle(6).fill('#4a4e57').move(10, 21).id('chat-circle1');		
				shopg.circle(6).fill('#4a4e57').move(22, 21).id('chat-circle2');	
				shopg.circle(6).fill('#4a4e57').move(34, 21).id('chat-circle3');
						
				//user-icon我的图标
				var usersvg = SVG().addTo('#user').size(24, 24).attr({ viewBox:'0 0 48 48' }).fill('none');
				var userclip = usersvg.clip();
				userclip.path('M36.69 13.49a2.01 2.01 0 103.824-1.241 12.037 12.037 0 00-7.197-7.552l1.527-1.156a1.37 1.37 0 00-1.107-2.433c-2.271.476-3.996.96-5.173 1.453-1.584.663-2.85 1.389-3.8 2.177a.488.488 0 00-.115.137 2.01 2.01 0 001.91 3.454 8.04 8.04 0 0110.132 5.162zm-11.786-.5a12.054 12.054 0 00-10.341-5.852c-6.661 0-12.06 5.4-12.06 12.06 0 5.984 4.358 10.95 10.074 11.898a18.416 18.416 0 01.24-4.048 8.04 8.04 0 118.41-12.348 18.01 18.01 0 013.677-1.71zm20.814 17.16c0-8.326-6.75-15.075-15.076-15.075-8.325 0-15.074 6.75-15.074 15.075 0 8.326 6.749 15.075 15.074 15.075 8.326 0 15.076-6.75 15.076-15.075zm-26.13 0c0-6.105 4.949-11.055 11.054-11.055 6.106 0 11.055 4.95 11.055 11.055 0 6.105-4.949 11.055-11.055 11.055-6.105 0-11.055-4.95-11.055-11.055zm16.918 1.76a1.91 1.91 0 00-2.7.017c-.974.987-1.998 1.442-3.163 1.442-1.166 0-2.19-.455-3.164-1.442a1.91 1.91 0 10-2.718 2.682c1.671 1.694 3.662 2.579 5.881 2.579 2.22 0 4.211-.885 5.882-2.579a1.91 1.91 0 00-.018-2.7zm-30.718-.828c1.11 0 2.01.9 2.01 2.01 0 4.44 3.6 8.04 8.04 8.04a2.01 2.01 0 01.7 3.895.499.499 0 01-.126.072c-1.147.456-2.576.755-4.287.896-1.272.105-3.062.033-5.369-.217a1.37 1.37 0 01-.301-2.656l1.824-.632a12.037 12.037 0 01-4.501-9.398c0-1.11.9-2.01 2.01-2.01z').fill('#4a4e57').id('me-clip-path');
				var userg = usersvg.group();
				userg.clipWith(userclip)
				userg.path('M36.69 13.49a2.01 2.01 0 103.824-1.241 12.037 12.037 0 00-7.197-7.552l1.527-1.156a1.37 1.37 0 00-1.107-2.433c-2.271.476-3.996.96-5.173 1.453-1.584.663-2.85 1.389-3.8 2.177a.488.488 0 00-.115.137 2.01 2.01 0 001.91 3.454 8.04 8.04 0 0110.132 5.162zm-11.786-.5a12.054 12.054 0 00-10.341-5.852c-6.661 0-12.06 5.4-12.06 12.06 0 5.984 4.358 10.95 10.074 11.898a18.416 18.416 0 01.24-4.048 8.04 8.04 0 118.41-12.348 18.01 18.01 0 013.677-1.71zm20.814 17.16c0-8.326-6.75-15.075-15.076-15.075-8.325 0-15.074 6.75-15.074 15.075 0 8.326 6.749 15.075 15.074 15.075 8.326 0 15.076-6.75 15.076-15.075zm-26.13 0c0-6.105 4.949-11.055 11.054-11.055 6.106 0 11.055 4.95 11.055 11.055 0 6.105-4.949 11.055-11.055 11.055-6.105 0-11.055-4.95-11.055-11.055zm16.918 1.76a1.91 1.91 0 00-2.7.017c-.974.987-1.998 1.442-3.163 1.442-1.166 0-2.19-.455-3.164-1.442a1.91 1.91 0 10-2.718 2.682c1.671 1.694 3.662 2.579 5.881 2.579 2.22 0 4.211-.885 5.882-2.579a1.91 1.91 0 00-.018-2.7zm-30.718-.828c1.11 0 2.01.9 2.01 2.01 0 4.44 3.6 8.04 8.04 8.04a2.01 2.01 0 01.7 3.895.499.499 0 01-.126.072c-1.147.456-2.576.755-4.287.896-1.272.105-3.062.033-5.369-.217a1.37 1.37 0 01-.301-2.656l1.824-.632a12.037 12.037 0 01-4.501-9.398c0-1.11.9-2.01 2.01-2.01z').stroke('#4a4e57').stroke({ width: 4 }).id('me-border');
				var userpink = userg.group().attr({ class:'transition_move1' });;
				userpink.circle(70).fill(gradientpink).move(-11, -11);
				var userellow = userg.group().attr({ class:'transition_move2' });;
				userellow.circle(70).fill(gradientyellow).move(-11, -11);
				var userblue = userg.group().attr({ class:'transition_move3' });
				userblue.circle(70).fill(gradientblue).move(-11, -11);
				userg.path('M14 30C20.5 35.5 21 30 24 30C26.5008 30 26.5 35.5 34 30').id('me-line').stroke('#4a4e57').stroke({ width: 4,linecap:'round',linejoin:'round'});
				
			}   
		}  
	}  
</script>


<style scoped lang="scss">
	
	$navHeight: '50px';
	$navBoxHeight: '0px';
	.tabbar{
			left: 0;
			right: 0;
			bottom: 0;
			display: flex;
			height: 110rpx;
			background-color: #FFFFff;
			//position: fixed;
			border-top: 1px solid #eee;
			user-select: none;
			&__item{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				flex: 1;
			}
			&__svg{
				display: flex;
				width:20px;
				height:20px;
				svg{
					width: 100%;
					height: 100%;
				}
			}
			&__name{
				height:auto;
				padding-top:  2px;
				font-size: 10px;
				transition: color .3s;
				color: #4a4e57;
				
			}
			.transition_move1,.transition_move2,.transition_move3{
				transform: translate(-50px,50px);
			}
			#home-circle{
			    stroke-dasharray:44 44;
			    stroke-dashoffset:0;
			}
			#explore-arrow{
			    stroke-dasharray:39 39;
			    stroke-dashoffset:0;
			}
			#me-line{
			    stroke-dasharray:23 23;
			    stroke-dashoffset:0;
			}
			#chat-circle1{
				transform-origin: 13px 24px;
			}
			#chat-circle2{
				transform-origin: 25px 24px;
			}
			#chat-circle3{
				transform-origin: 37px 24px;
			}
			.on{
				.tabbar__name{
					color: #5182fb;
				}
				svg{
					animation: heartbeat 1s;
				}
				#home-circle{
					animation: home-circle 1s ease forwards;
				}
				#explore-arrow{
					animation: explore-arrow 1s ease forwards;
				}
				#me-line{
					animation: me-line 1s ease forwards;
				}
				#chat-circle1{
					animation: chat-circle 1s ease forwards;
				}
				#chat-circle2{
					animation: chat-circle 1s .15S  ease forwards;
				}
				#chat-circle3{
					animation: chat-circle 1s .3S ease forwards;
				}
				.transition_move1{animation: transition-move 0.5s 0.3s forwards;}
				.transition_move2{animation: transition-move 0.5s 0.35s forwards;}
				.transition_move3{animation: transition-move 0.5s 0.4s forwards;}
			}
		}
		/**
		 * 心跳动画
		 */
		@keyframes heartbeat{
			0%{transform: scale(1);}
			20%{transform: scale(0.8);}
			40%{transform: scale(1);}
			60%{transform: scale(0.9);}
			80%,100%{transform: scale(1);}
		}
		/**
		 * 路径动画
		 * @params {string} $name 关键帧名字
		 * @params {string} $length 路径长度
		 * @params {string} $startColor 开始动画路径的颜色
		 * @params {string} $endColor 结束动画路径的颜色
		 */
		@mixin pathKeyframes($name,$length,$startColor:#4a4e57,$endColor:#ffffff) {
			@keyframes $name{
				0%{
					stroke:$startColor;
					stroke-dashoffset:0;
					}
				50%{
					stroke:$startColor;
					stroke-dashoffset:$length;
				}
				50.1%{
					stroke:$endColor;
					stroke-dashoffset:$length*-1;
				}
				100%{
					stroke:$endColor;
					stroke-dashoffset:0;
				}
			}
		}
		@include pathKeyframes(home-circle,44);
		@include pathKeyframes(explore-arrow,39);
		@include pathKeyframes(me-line,23);
		
		/*闪屏移动*/
		@keyframes transition-move{
			100%{
				transform: translate(0,0);
			}
		}
		
		// 尬聊小圆 关键帧
		@keyframes chat-circle{
				0%{
					fill:#4a4e57;
					transform: scale(1);
				}
				50%{
					fill:#4a4e57;
					transform: scale(0);
				}
				50.1%{
					fill:#ffffff;
					transform: scale(1) translateY(0);
				}
				60%{
					fill:#ffffff;
					transform: scale(1) translateY(-10px);
				}
				85%{
					fill:#ffffff;
					transform: scale(1) translateY(10px);
				}
				100%{
					fill:#ffffff;
					transform: scale(1) translateY(0);
				}
		}
	.bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: $navHeight;
		background: #fff;
		z-index: 10;
	}

	/*苹果x适配 H5APP*/
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.bottom {
			height: $navHeight + $navBoxHeight;
		}
	}

	/*苹果xs适配 H5APP*/
	@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
		.bottom {
			height: $navHeight + $navBoxHeight;
		}
	}

	/*苹果xr适配 H5APP*/
	@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
		.bottom {
			height: $navHeight + $navBoxHeight;
		}
	}
	
</style>