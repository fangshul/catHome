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
				<navigator
					v-for="(item,index) in adoptdata" 
					:key="index"  
					class="cu-item shadow " 
					:url='"../AdoptDetail/AdoptDetail?id="+item._id' >
					<view class="title">
						<view class="text-cut">
							{{ item.petAge }}岁 的 猫猫{{ item.petName }} 正在找家
						</view>
					</view>
					<view class="content">
						<image 
						:src="item.headImg"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> {{ item.story }}</view>
							<view>
								<view class="cu-tag bg-red light sm round" 
									v-if="item.vaccine">
									已免疫
								</view>
								<view 
									v-if="item.sterilization"
									class="cu-tag bg-green light sm round">
									已绝育
								
								</view>
								<view class="cu-tag bg-orange light sm round" 
									v-if="item.expellingParasite">
									已驱虫
								</view>
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
				<!-- <view class="cu-item shadow" >
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
				<navigator
					
					v-for="item in findcat"
					:v-if="!item.iffind"
					:key="index"
					:url="'../FindcatDetail/FindcatDetail?id='+item._id"
					class="cu-item shadow">
					<view class="title">
						<view class="text-cut">
							猫咪 <text class="nameType"> {{ item.petName }} </text> 丢失，请求帮忙
						</view>
					</view>
					<view class="content">
						
						<image 
							style="height: 250rpx;"
							:src="item.headImg"
							
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> 
								{{ item.story }}
							</view>
							<view class="lostInfo">
								<view class="lostTime">
									<text class="cuIcon-timefill " ></text>
									丢失时间：{{ item.lostDate }}
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
				
			</view>
		</view>
			
		
	</view>
</template>

<script>
	const db = wx.cloud.database()
	const todos = db.collection('findCat')
	const adopt = db.collection('adopt')
	
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
				}],
				findcat: [],
				adoptdata:[]
			}
		},
		onShow () {
			console.log('onshow')
			this.getfindcatdata()
			this.getadoptdata()
		},
		onLoad() {
			console.log('onload')
			
		},
		methods: {
			// 点击轮播图
			selectedBanner(item, index) {
				console.log('', item, index)
			},
			async getadoptdata () {
				const alladoptdata = await adopt.orderBy('date','desc').get({
					
				})
				var adoptmax
				if (alladoptdata.data.length > 3) {
					adoptmax = 3
				} else {
					adoptmax = alladoptdata.data.length
				}
				console.log(alladoptdata)
				for (var i=0; i<adoptmax; i++) {
					this.adoptdata.push(alladoptdata.data[i])
					
					var url = await wx.cloud.downloadFile({
								  fileID: alladoptdata.data[i].imgList[0], // 文件 ID
								  
								})
					// console.log(url)
					this.adoptdata[i].headImg = url.tempFilePath
					// console.log(this.findcat)
				}
				
				this.$forceUpdate()
				// this.adoptdata = alldata.data
				
				// this.getimgurl()
				
			},
			async getfindcatdata () {
				const alldata = await todos.orderBy('date','desc').get({
					
				})
				console.log(alldata)
				var max
				if (alldata.data.length > 3) {
					max = 3
				} else {
					max = alldata.data.length
				}
				// console.log(max)
				for (var i=0; i<max; i++) {
					this.findcat.push(alldata.data[i])
					
					var url = await wx.cloud.downloadFile({
								  fileID: alldata.data[i].imgList[0], // 文件 ID
								  
								})
					// console.log(url)
					this.findcat[i].headImg = url.tempFilePath
					// console.log(this.findcat)
				}
				this.$forceUpdate()
				
				
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
