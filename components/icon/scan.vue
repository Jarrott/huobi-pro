<template>
	<view>
		<image src="../../static/icon/ic_scan_code.png" class="icon" @click="click"></image>
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
			},
			scan: {
				type: Function,
			}
		},
		data() {
			return {
				
			}
		},
		created() {
		},
		mounted(){
		},
		methods: {
			click() {
				this.scan();
			}
		}
	}
</script>

<style scoped>
</style>
