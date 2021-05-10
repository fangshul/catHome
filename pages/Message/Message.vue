<template>
	<view>
		<!-- <scroll-view scroll-x class="bg-white nav text-center">
			
			<view 
				class="cu-item" 
				:class="index==TabCur?'text-orange  cur':''" 
				v-for="(item,index) in bar" 
				:key="index" 
				@tap="tabSelect"
				:data-id="index">
				
				{{ item }}
			
			</view>
		</scroll-view> -->
		<uni-list>
		  
			<uni-list-chat 
				title="uni-app" 
				avatar="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png" 
				
				note="您收到一条新的消息" 
				time="2020-02-02 20:20" 
				badge-positon="left" 
				
				>
				 <view class="chat-custom-right">
					 <image src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1851283359,3457678391&fm=26&gp=0.jpg"></image>
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
				// bar:[
				// 	'领养',
					
				// 	'论坛'
				// ],
				// TabCur: 0,
			}
		},
		methods: {
			// tabSelect(e) {
			// 	this.TabCur = e.currentTarget.dataset.id;
			// 	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			// }
		}
	}
</script>

<style lang="scss">
.chat-custom-right{
	image{
		width: 80rpx;
		height: 80rpx;
	}
}
</style>
