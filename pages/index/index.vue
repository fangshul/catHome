<template>
	
	<view class="body">
		<view class="head">
			<!-- 轮播图 -->
			<carousel
				:img-list="imgList" 
				url-key="url" 
				@selected="selectedBanner"/>
			<!-- 图标 -->
			<view class="typeList">
				<navigator  url="../Adopt/Adopt">
					<image src="../../static/images/index/adopt.png"></image>
					<view>领养</view>
				</navigator>
				<navigator  url="../FindCat/FindCat">
					<image src="../../static/images/index/findcat.png"></image>
					<view>寻猫</view>
				</navigator>
				<navigator  url="../Forum/Forum">
					<image src="../../static/images/index/forun.png"></image>
					<view>论坛</view>
				</navigator>
				<!-- <navigator  url="../black/black">
					<image src="../../static/images/index/black.png"></image>
					<view>黑名单</view>
				</navigator> -->
				
			</view>
		</view>
		<view class="adopt">
			<view class="titleText">
				最新领养
			</view>
			<!-- <view class="titleText text-xl solid-bottom">
				<text class="text-black text-bold">
					最新领养
				</text>
			</view> -->
			<view class="cu-card article" :class="isCard?'no-card':''">
				<navigator class="cu-item shadow " url="../AdoptDetail/AdoptDetail">
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
				</navigator>
				<!-- <view class="cu-item shadow " >
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
				</view> -->
				<view class="cu-item shadow" >
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
		</view>
		<view class="find">
			<view class="titleText">
				最新寻猫
			</view>
			<!-- <view class="titleText text-xl solid-bottom">
				<text class="text-black text-bold">
					最新寻猫
				</text>
			</view> -->
			<view class="cu-card article" :class="isCard?'no-card':''">
				<navigator url="../FindcatDetail/FindcatDetail" class="cu-item shadow">
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
				</navigator>
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
		</view>
			
		
	</view>
</template>

<script>
	import carousel from '@/components/vear-carousel/vear-carousel'
	export default {
		components:{
			carousel
		},
		data() {
			return {
				title: 'Hello',
				imgList: [{
					url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3488207672,3352446836&fm=26&gp=0.jpg',
					id: 1
				},{
					url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2653786338,2258592089&fm=26&gp=0.jpg',
					id: 2
				},{
					url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3440678884,1757659684&fm=26&gp=0.jpg',
					id: 3
				}]
			}
		},
		onLoad() {
		
		},
		methods: {
			// 点击轮播图
			selectedBanner(item, index) {
				console.log('', item, index)
			}
		}
	}
</script>

<style scoped lang="scss">
	.body{
		
		background-color: rgba(230,230,230,0.5);
		.head{
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
			.typeList{
				display: flex;
				justify-content: space-around;
				width: 85vw;
				// padding: 0 1vw;
				// margin: 5vw;
				margin: 0 auto;
				navigator{
					// margin-bottom: 20rpx;
					margin: 16rpx 0;
					text-align: center;
					image{
						width: 100rpx;
						height: 100rpx;
					}
				}
			}
		}
		.cu-item{
			box-shadow:0px 0px 16px #ddd;
		}
		.adopt{
			background-color: #fff;
			margin-bottom: 20rpx;
			.titleText{
				padding-top: 20rpx;
				margin-left: 44rpx;
				font-size: 40rpx;
			}
		}
		.find{
			background-color: #fff;
			margin-bottom: 20rpx;
			.titleText{
				padding-top: 20rpx;
				margin-left: 44rpx;
				font-size: 40rpx;
				// font-weight: bold;
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
	}
	
</style>
