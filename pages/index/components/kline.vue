<template>
	<view>
		<canvas style="width: 88px; height: 24px;" :canvas-id="name"></canvas>
	</view>

</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
			},
			upDown: {
				type: Number,
			},
			name: {
				type: String,
			}
		},
		data() {
			return {
				showSelect: false,
				type: 'btc',
			}
		},
		mounted() {
			this.drawKline()
		},
		methods: {
			getMaxNumGen(arr, height) {
				let maxNum = Math.max.apply(null, arr);
				return arr.map(v => {
					return Number(Number(v * (height / maxNum)).toFixed(2))
				})
			},
			drawKline() {
				const width = 88;
				const height= 24;
				let color = '';
				if (this.upDown>0) {
					color = '#07B360';
				} else {
					color = '#FA2B2B';
				}
				const context = uni.createCanvasContext(this.name);
				const maxNumGen = this.getMaxNumGen(this.data, height);
				context.setStrokeStyle(color);
				context.setLineWidth(1);
				context.moveTo(0, 0);
				maxNumGen.forEach((v, index) => {
					context.lineTo(index * (width / this.data.length), (v-22)*10);
				})
				context.stroke()
				context.draw()
			},
		}
	}
</script>

<style scoped lang="scss">
	
</style>
