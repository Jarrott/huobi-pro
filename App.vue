<script>
	export default {
		
		onLaunch: function() {
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			goto(url) {
				uni.navigateTo({
					url,
				})
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	@import url("./common/main.css");
	@import url("http://at.alicdn.com/t/font_3434820_60st7turq0s.css");
</style>
