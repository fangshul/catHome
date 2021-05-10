<template>
	<view class="body">
		<selector :ifinfo="false"></selector>
		<view class="cu-card article" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image 
						style="height: 250rpx;"
						src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view class="lostInfo">
							<view class="lostTime">
								<text class="cuIcon-timefill " ></text>
								丢失时间：2021-09-09
							</view>
							<view class="lostlocation">
								<text class="cuIcon-location " ></text>
								丢失地点：马坝
							</view>
							<!-- <view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view> -->
						</view>
					</view>
				</view>
			</view>
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view></view>
				<view class="content">
					<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
						<view>
							<view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="nomore">--  暂无更多  --</view>
	</view>
</template>

<script>
	import selector from '@/components/selector/selector.vue'
	
	const db = wx.cloud.database()
	const todos = db.collection('findCat')
	export default {
		data() {
			return {
				
			}
		},
		mounted() {
			console.log("aa")
			console.log(todos.doc('17453ede6098b0df08a8a7030fa1c5fe'))
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.body{
	width: 100vw;
	min-height: 100vh;
	background-color: rgba(230,230,230,0.5);
	
	.nomore{
		text-align: center;
	}
	.lostInfo{
		view{
			// margin: 20rpx 0;
			margin-top: 20rpx;
			// width: 100%;
			// overflow: hidden;
			text{
				color: $system-color;
				margin-right: 5rpx;
			}
		}
	}
}
</style>
