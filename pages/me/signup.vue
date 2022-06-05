<template>
	<view>
		<view class="status-bar"></view>
		<uni-nav-bar left-icon="closeempty" title="Sign Up" @clickLeft="clickLeft"/>
		<view class="account">
			<view class="type-select">
				<view class="tabs">
					<v-tabs v-model="type" :tabs="['Email', 'Phone']" height="30px" bgColor="#e9eaee" padding="10"
						paddingItem="8px 22px" :pills="true" pillsBorderRadius="0" line-height="0" pillsColor="#fff"
						activeColor="#494949" @change="changeTab"></v-tabs>
				</view>

			</view>

			<view class="account-form" v-if="type==0">
				<form>

					<view class="uni-form-item uni-column">
						<view class="form-label">Email</view>
						<input class="uni-input" v-model="username" :placeholder="t('login_code_hint')" />
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-label">Password</view>
						<view class="password">
							<input class="uni-input" v-model="password" :placeholder="t('login_pwd_hint')"
								:password="!isShowPassword" />
						</view>
					</view>
					
					
					<view class="uni-btn-v">
						<button :class="['btn-large', {'btn-active': account_active}]"
							@click="login">{{t('login_login_now')}}</button>
					</view>
					<view style="text-align: right;margin-top: -8px">
						<navigator url="pages/my/signup" hover-class="navigator-hover" class="navigate">
							{{t('login_pwd_forget')}}</navigator>
					</view>
				</form>
			</view>
			<view class="phone-form" v-if="type==1">
				<form>

					<view class="uni-form-item uni-column">
						<view class="form-label">Phone Number</view>
						<input class="uni-input" name="input" placeholder="Please enter phone number" />
					</view>
					<view class="uni-form-item uni-column">
						<view class="form-label">Password</view>
						<view class="password">
							<input class="uni-input" v-model="password" :placeholder="t('login_pwd_hint')"
								:password="!isShowPassword" />
						</view>
					</view>
					<navigator url="pages/my/signup" hover-class="navigator-hover" class="navigate">
						{{t('login_pwd_forget')}}</navigator>
					<view class="uni-btn-v">
						<button :class="['btn-large', {'btn-active': account_active}]"
							@click="login">{{t('login_login_now')}}</button>
					</view>
				</form>

				<view class="have-account">
					Don't have an account?<navigator url="/pages/my/signup" hover-class="navigator-hover"
						class="navigate">Sign up</navigator>
				</view>
			</view>
		</view>

		<uni-popup type="center" ref="popup">
			<uni-popup-message type="success" :message="tips" :duration="2000"></uni-popup-message>
		</uni-popup>
	</view>
</template>
<script>
	import {
		getCaptcha,
		login
	} from '../../api/account.js'
	export default {
		components: {},
		data() {
			return {
				type: 0,
				captcha: '',
				password: '',
				username: '',
				captchaImg: '',
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
		computed: {
			account_active() {
				return this.username && this.password && this.captcha
			}
		},
		methods: {
			clickLeft() {
				uni.navigateBack()
			},
			changeTab(type) {
				this.type = type;
			},
			toggle() {
				this.isShowPassword = !this.isShowPassword;
			},
			changeType(type) {
				this.type = type;
			},
			getCaptcha() {
				getCaptcha().then(res => {
					this.captchaImg = res.image;
					this.tag = res.tag;
				});
			},
			login() {
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
				}, {
					tag: this.tag,
				}).then(res => {
					const {
						code,
						message
					} = res;
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
							success: function() {}
						});
						uni.setStorage({
							key: 'password',
							data: this.password,
							success: function() {}
						});
						const that = this;
						uni.setStorage({
							key: 'access_token',
							data: res.access_token,
							success: function() {
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

<style lang="scss" scoped>
	.account {
		.tabs {
			padding: 4px 3px;
			background: #e9eaee;
		}

		/deep/.v-tabs__container {
			display: flex;
		}

		/deep/.v-tabs__container-item {
			flex: 1;
			justify-content: center;
		}
	}
</style>
