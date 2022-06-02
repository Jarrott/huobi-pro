<template>
	<view>
		<image src="../../static/icon/ic_text_visible_no.png" class="icon" v-if="!show" @click="change"></image>
		<image src="../../static/icon/ic_text_visible_yes.png" class="icon" v-else  @click="change"></image>
	</view>
</template>

<script>
	export default {
		name: 'tick',
		props: {
			show: {
				type: Boolean,
				default: 6
			},
		},
		data() {
			return {
				
			}
		},
		methods:{
			change() {
				this.$props.show = !this.$props.show
			}
		}
	}
</script>

<style scoped>

</style>