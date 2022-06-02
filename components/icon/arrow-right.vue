<template>
	<view>
		<image src="../../static/icon/ic_arrow_gray.png" class="right-arrow" ></image>
	</view>
	
</template>

<script>

	export default {
		name: 'arrow-right',
		props: {
			width: {
				type: Number,
				default: 6
			},
			height: {
				type: Number,
				default: 10
			}
		},
		data() {
			return {
				
			}
		},
		created() {
		},
		mounted(){
		}
	}
</script>

<style scoped>
	.right-arrow {
		width: 6px;
		height: 10px;
	}
</style>
