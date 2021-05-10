<template>
	<view class="body">
		<view class="header">
			<swiper
				class="screen-swiper" 
				:class="dotStyle?'square-dot':'round-dot'" 
				:indicator-dots="true" 
				:circular="true"
				:autoplay="true" 
				interval="5000" 
				duration="500"
				>
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
			<view class="title">
				韶关市的猫猫宿舍正在找家
			</view>
			<view class="info">
				<view class="viewed">浏览量：000</view>
				<view class="update">更新:20202-2029-99</view>
			</view>
			<view  class="gridbox">
				<cl-grid column="3">
					<cl-grid-item 
						v-for="(item, index) in catData" 
						:key="index"
						style="text-align: center;padding: 5rpx 0;"> 
						<view style="padding: 5rpx 0;">
							<text :class="'cuIcon-'+item.icon" class="infoitemIcon"></text>
							{{item.info}}
						</view>
						
					</cl-grid-item>
				</cl-grid>
			</view>
			<view class="sorry">
				<view class="sorryTitle">
					<text class="cuIcon-titles"></text>
					<text>TA的故事</text>
				</view>
				<view>jskdfh sdafnjd lsdf kdj 十分积极的上帝就发你说的妓女接客水电费缴纳税款地方u可接受对方裤脚符文
				艾斯芬尼设法不卡粉橘色被封为北京分解为捏无法比拟
				</view>
			</view>
		</view>
		<view class="condition">
			<view class="sorryTitle">
				<text class="cuIcon-titles"></text>
				<text>领养条件</text>
			</view>
			<view class="cost">
				<text class="cuIcon-choicenessfill"></text>
				<text>免费</text>
			</view>
			<view class="cu-item arrow" >
				<view class="content cost" >
					<text class="cuIcon-info text-grey"></text>
					<text class="text-grey">需要带去绝育</text>
				</view>
				<view class="content">
					<text class="cuIcon-info text-grey"></text>
					<text class="text-grey">需要带去绝育</text>
				</view>
			</view>
			
		</view>
		
		<view class="master">
			<view class="sorryTitle">
				<text class="cuIcon-titles"></text>
				<text>联系送养人</text>
			</view>
			<view class="masterInfo" @click="gotoCenter">
				<!-- <view > -->
					<view>
						<view class=" masterImg cu-avatar xl round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></view>
						<view class="mastername">
							数据的肌肤保湿
							<view class="buttonbox">
								<cl-button size="small" round shadow="true">
									<text class="cuIcon-copy copybutton"></text>
									<text class="copybutton">复制微信号</text>
									
								</cl-button>
								<cl-button size="small"  round  shadow="true">
									<text class="cuIcon-phone copybutton"></text>
									<text class="copybutton ">复制手机号</text>
									
								</cl-button>
							</view>
						</view>
					</view>
					<view class="more">
						<text class="cuIcon-right"></text>
					</view>
				<!-- </view> -->
					
			</view>
			
		</view>
		
		
		
		<!-- <view class="box">
			<view class="cu-bar bg-white tabbar border shop" style="justify-content: space-around;">
				
				<view class="action">
					<view class=" cuIcon-home"></view> 回到主页
				</view>
				
				
					<button style="400rpx" class="cu-btn bg-orange lg">申请领养</button>
				
			</view>	
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				catData:[
					{
						icon:'emoji',
						info:'宿舍'
					},
					{
						icon:'male',
						info:'男生'
					},
					{
						icon:'magic',
						info:'1岁'
					},
					{
						icon:'favor',
						info:'已驱虫'
					},
					{
						icon:'vip',
						info:'已绝育'
					},
					{
						icon:'tag',
						info:'已免疫'
					}
				],
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}]
			}
		},
		methods: {
			gotoCenter() {
				uni.navigateTo({
					url:'../personalCenter/personalCenter'
				})
			}
		}
	}
</script>

<style scoped>
.body{
	background-color: rgba(230,230,230,0.5);
	min-height: 100vh;
	padding-bottom: 40rpx;
}
.header{
	background-color: #fff;
	margin-bottom: 20rpx;
}
.title{
	padding-top: 40rpx;
	padding-left: 30rpx;
	font-size: 40rpx;
}
.box{
	position: fixed;
	width: 100vw;
	bottom: 0;
}
.info{
	color: #999999;
	font-size: 30rpx;
	display: flex;
	justify-content: space-around;
	margin: 30rpx;
}
.gridbox{
	width: 90vw;
	box-shadow: 0px 0px 17rpx #ddd;
	margin: 0 auto;
	padding: 5rpx 0;
}
.infoitemIcon{
	color: #F4AE26;
	margin-right: 10rpx;
}
.sorry,.condition,.master{
	width: 100vw;
	padding: 30rpx;
}
.sorryTitle{
	color: #F4AE26;
	margin-bottom: 20rpx;
}
.condition{
	background-color: #fff;
	margin-bottom: 20rpx;
}
.cuIcon-choicenessfill{
	color: #F4AE26;
	margin-right: 10rpx;
}
.cost{
	margin-bottom: 10rpx;
}
.cuIcon-info{
	margin-right: 10rpx;
}
.master{
	background-color: #fff;
	/* margin-bottom: 165rpx; */
}
.masterInfo{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.masterInfo>view{
	display: flex;
	/* align-items: center; */
}
.mastername{
	font-size: 40rpx;
	/* font-weight: bold; */
}
.masterImg{
	margin-right: 40rpx;
}
.more{
	color: #888888;
}
.copybutton{
	color: #F4AE26;
}
/* .copybutton>text{
	margin-right: 10rpx;
} */
.buttonbox{
	display: flex;
	justify-content: center;
	margin:20rpx 0;
}
.cuIcon-copy,.cuIcon-phone{
	margin-right: 5rpx;
}
</style>
