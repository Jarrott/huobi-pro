<template>
	<view class="account">
		<view class="status-bar"></view>	
		<!-- <view class="nav">
			<image src="../../static/icon/ic-close.png" @click="close" class="close-btn"></image>
		</view> -->
		
		<view class="title">{{t('login_welcome')}}</view>
		<view class="type-select">
			<button :class="['accont-btn', 'type-btn', 'btn', {'btn-select': type===0}]" @click="changeType(0)">{{t('user_account')}}</button>
			<button :class="['phone-btn', 'type-btn', 'btn', {'btn-select': type===1}]" @click="changeType(1)">{{t('user_phone')}}</button>
		</view>
		<view class="account-form" v-if="type==0">
			<form>
				
				<view class="uni-form-item uni-column">
					<view class="form-label">{{t('user_account')}}</view>
					<input class="uni-input" v-model="username" :placeholder="t('login_code_hint')" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-label">{{t('user_pwd_login')}}</view>
					<view class="password">
						<input class="uni-input"v-model="password" :placeholder="t('login_pwd_hint')" :password="!isShowPassword"/>
					</view>
				</view>
				<view class="uni-form-item uni-column">
					<view class="form-label">{{t('app_verification')}}</view>
					<view class="flex">
						<input class="uni-input flex-1 input-captcha" :placeholder="t('login_code_hint')" v-model="captcha"/>
						<image :src="captchaImg" class="captcha" @click="getCaptcha"></image>
					</view>
				</view>
				<navigator url="pages/my/signup" hover-class="navigator-hover" class="navigate">{{t('login_pwd_forget')}}</navigator>
				<view class="uni-btn-v">
					<button :class="['btn-large', {'btn-active': account_active}]" @click="login">{{t('login_login_now')}}</button>
				</view>
			</form>
			
			<view class="have-account">
				{{t('login_to_register_tip')}}<navigator url="/pages/my/signup" hover-class="navigator-hover" class="navigate">{{t('login_to_register_tip1')}}</navigator>
			</view>
		</view>
		<view class="phone-form" v-if="type==1">
			<form>
				
				<view class="uni-form-item uni-column">
					<view class="form-label">{{t('app_phone_number')}}</view>
					<input class="uni-input" name="input" placeholder="Please enter phone number" />
				</view>
				<navigator url="pages/my/signup" hover-class="navigator-hover" class="navigate">{{t('login_pwd_forget')}}</navigator>
				<view class="uni-btn-v">
					<button :class="['btn-large', {'btn-active': account_active}]" @click="login">{{t('login_login_now')}}</button>
				</view>
			</form>
			
			<view class="have-account">
				Don't have an account?<navigator url="/pages/my/signup" hover-class="navigator-hover" class="navigate">Sign up</navigator>
			</view>
		</view>
		<uni-popup type="center" ref="popup">
			<uni-popup-message type="success" :message="tips" :duration="2000"></uni-popup-message>
		</uni-popup>
	</view>
</template>
<script>
	import { getCaptcha, login } from '../../api/account.js'
	export default {
		components: {
		},
		data() {
			return {
				type:0,
				captcha: '',
				password: '',
				username: '',
				captchaImg:'',
				tag: '',
				isShowPassword: false,
				tips: ''
			}
		},
		onLoad() {
			this.getCaptcha();
			this.username = uni.getStorageSync('username');
			this.password = uni.getStorageSync('password');
			uni.removeStorage({
				key: 'access_token',
			});
		},
		computed:{
			account_active(){
				return this.username && this.password && this.captcha
			}
		},
		methods: {
			toggle() {
				this.isShowPassword = !this.isShowPassword;
			},
			changeType(type) {
				this.type=type;
			},
			getCaptcha() {
				getCaptcha().then(res=>{
					this.captchaImg = res.image;
					this.tag = res.tag;
				});
			},
			login(){
				const captcha = this.captcha;
				const username = this.username;
				const type = this.type;
				const password = this.password;
				// if (!/([a-zA-Z0-9]){5,11}/.test(username)) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: 'format error: account number consists of 5-11 digits + letters',
				// 		duration: 2000
				// 	});
				// 	return;
				// }
				// if (!/([a-zA-Z0-9]){8,16}/.test(password)) {
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: 'format error: password consists of 8-16 digits + letters',
				// 		duration: 2000
				// 	});
				// 	return;
				// }
				login({
					captcha,
					username,
					type,
					password
				},{
					tag: this.tag,
				}).then(res=>{
					const {code, message} = res;
					if (code) {
						this.tips = message;
						uni.showToast({
							icon: 'none',
							title: message,
							duration: 2000
						});
						//this.$refs.popup.open('center')
					} else {
						uni.setStorage({
							key: 'username',
							data: this.username,
							success: function () {
							}
						});
						uni.setStorage({
							key: 'password',
							data: this.password,
							success: function () {
							}
						});
						const that = this;
						uni.setStorage({
							key: 'access_token',
							data: res.access_token,
							success: function () {
								uni.switchTab({
									url: '/pages/my/my',
									success() {
										console.log(9999)
										uni.showToast({
											icon: 'none',
											title: that.t('login_login_succes'),
											duration: 2000
										});
									}
								});
							}
						});
						
					}
					
				});
			},
			close() {
				uni.switchTab({
					url: '/pages/my/my'
				});
			}
		}
	}
</script>

<style>

</style>
