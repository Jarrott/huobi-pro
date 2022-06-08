<template>
	<view>
		<scroll-view scroll-x="true" show-scrollbar="false">
			<view class="type-list" v-if="type.length>0">
				<view v-for="item in type" :key="item" :class="['item', {'active': item===current}]" @click="changeType(item)">{{item}}</view>
			</view>

		</scroll-view>
		<list :list="currentList"></list>
	</view>
</template>

<script>
	import List from './list.vue'
	export default {
		props: {
			list: {
				type: Array,
			},
			type: {
				type: Array,
			}
		},
		computed: {
			currentList() {
				let list = this.list;
				if (this.current !=='All') {
					list = this.list.filter(item=> {
						let flag = false;
						
						if(item.partitions) {
							
							item.partitions.forEach(partition => {
								if (partition.name === this.current) {
									flag = true;
								}
							})
						}
						return flag;
					});
				}
				
				return list;
			}
		},
		data() {
			return {
				current: 'All',
			}
		},
		components: {
			List,
		},
		methods: {
			changeType(item) {
				this.current = item;
			}
		}
	}
</script>

<style lang="scss">
	.type-list {
		display: flex;
		font-size: 12px;
		padding: 8px;

		.item {
			background: #f8f8f9;
			padding: 2px 6px;
			margin-right: 8px;
			&.active {
				color: rgb(41, 121, 255);
			}
		}
	}
</style>
