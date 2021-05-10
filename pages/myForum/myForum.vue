<template>
	<view>
		<uni-list>
		  
			<uni-list-chat 
				title="uni-app" 
				avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png" 
				
				note="您收到一条新的消息" 
				time="2020-02-02 20:20" 
				badge-positon="left" 
				
				>
				 <view class="chat-custom-right">
					 <view class="delete">删除
						<cl-icon  name="cl-icon-close-border"></cl-icon>
					 </view>
					 <!-- <cl-select v-model="val" :options="list"></cl-select> -->
				 </view>
			 </uni-list-chat>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		data() {
			return {
				// list:[{
				// 	label: "已被领养",
				// 	value: 1
				// },{
				// 	label: "未被领养",
				// 	value: 2
				// }],
				// val:1
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.delete{
	font-size: 29rpx;
	cl-icon{
		margin-left: 10rpx;
	}
	/* padding-left: 10rpx; */
}
</style>
