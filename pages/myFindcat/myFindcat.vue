<template>
	<view>
		
		<scroll-view scroll-x class="bg-white nav text-center">
			
			<view 
				class="cu-item" 
				:class="index==TabCur?'text-orange  cur':''" 
				v-for="(item,index) in bar" 
				:key="index" 
				@tap="tabSelect"
				:data-id="index">
				
				{{ item }}
			
			</view>
		</scroll-view>
		<view class="finded">
			<uni-list>
			   <!-- <uni-list-item 
					title="列表左侧带略缩图" 
					note="列表描述信息" 
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
					thumb-size="lg" 
					rightText="右侧文字">
				</uni-list-item> -->
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
						 <!-- <view>asdsd</view> -->
						 <cl-select v-model="val" :options="list"></cl-select>
						 <!-- <button></button> -->
					 </view>
				 </uni-list-chat>
			    <!-- <uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标" ></uni-list-item> -->
			</uni-list>
		</view>
		
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			uniList,
			uniListItem
		},
		data() {
			return {
				bar:[
					'已找到',
					'未找到'
				],
				TabCur: 0,
				scrollLeft: 0,
				val: 1,
				list:[
					{
						label: "已找到",
						value: 1
					},
					{
						label: "未找到",
						value: 2
					}
				]
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style lang="scss" scoped>
.chat-custom-right{
	display: flex;
	align-items: center;
}
.delete{
	font-size: 29rpx;
	cl-icon{
		margin-left: 10rpx;
	}
	/* padding-left: 10rpx; */
}
</style>
