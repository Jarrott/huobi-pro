<template>
	<image src="../../static/icon/ic_tick.png" class="icon"></image>
</template>

<script>
	export default {
		name: 'tick',
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
	}
</script>

<style scoped>
	.icon {
		width: 10px;
		height: 8px;
	}
</style>
