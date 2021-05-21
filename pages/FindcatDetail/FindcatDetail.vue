<template>
	<view class="body">
		<cl-loading-mask 
			v-if="loading"
			:fullscreen="true"
			:loading="true" text="拼命加载中">
			
		</cl-loading-mask>
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
				<swiper-item v-for="(item,index) in imgs" :key="index">
					<image :src="item" mode="aspectFill" ></image>
					<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
				</swiper-item>
			</swiper>
			<view class="title">
				{{ location }} 的猫猫 <text class="nameType">{{findcatdata.petName}}</text> 丢失请帮忙
			</view>
			<view class="info">
				<!-- <view class="viewed">浏览量：000</view> -->
				<view class="update">更新: {{ date }}</view>
			</view>
			
			<view class="sorry">
				<view class="sorryTitle">
					<text class="cuIcon-titles"></text>
					<text>TA的故事</text>
				</view>
				<view>
					{{ findcatdata.story }}
				</view>
			</view>
		</view>
		<view class="condition">
			<view class="sorryTitle">
				<text class="cuIcon-titles"></text>
				<text>猫咪信息</text>
			</view>
			<view>猫咪姓名：{{ findcatdata.petName }} </view>
			<view>猫咪性别：{{ findcatdata.petSex== 1 ? '女孩' : '男孩' }} </view>
			
			<view>猫咪种类：{{ type }}</view>
		
			
		</view>
		
		<view class="condition">
			<view class="sorryTitle">
				<text class="cuIcon-titles"></text>
				<text>丢失详情</text>
			</view>
			<view>丢失时间：{{ findcatdata.lostDate }}  {{ findcatdata.lostTime }}</view>
			<view>丢失地点：{{ province }} {{ location }}</view>
		
			
		</view>
		
		<view class="master">
			<view class="sorryTitle">
				<text class="cuIcon-titles"></text>
				<text>联系寻找人</text>
			</view>
			<view class="masterInfo"  @click="gotoCenter">
				<!-- <view > -->
					<view>
						<!-- <view class=" masterImg cu-avatar xl round margin-left" :style="'background-image:url('+headimg+');'"></view> -->
						<view
							class=" masterImg cu-avatar xl round margin-left" 
							:style='"background-image:url("+ findcatdata.masterImg +");"'>
						</view>
						<view class="mastername">
							{{ findcatdata.masterName }}
							<view class="buttonbox">
								<cl-button size="small" @click.stop="copywechat" round shadow="true">
									<text class="cuIcon-copy copybutton"></text>
									<text class="copybutton" >复制微信号</text>
									
								</cl-button>
								<cl-button v-if="findcatdata.disphone" @click.stop="copyphone" size="small"  round  shadow="true">
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
		
		
		
	<!-- 	<view class="box">
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
	import areaData from '../../static/area-data-min.js'
	import catType from '@/static/cat.js'
	const db = wx.cloud.database()
	const findcat = db.collection('findCat')
	export default {
		data() {
			return {
				loading : true,
				allok: {
					getimgurl: false,
					getLocation: false,
					getdate: false
				},
				findcatdata: '',
				imgs: [],
				location: '',
				province: '',
				date: '',
				type: '',
				headimg: '',
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
		onLoad(option) {
			console.log(catType)
			
			
			findcat.doc(option.id).get().then(res => {
				console.log(res)
				this.findcatdata = res.data
				// this.disphone = this.findcatdata.disphone
				// console.log(this.disphone)
				// console.log(catType)
				// this.type = catType[this.findcatdata.petType].label
				this.getimgurl()
				this.getLocation(this.findcatdata.lostLocation)
				this.getdate(this.findcatdata.date)
				this.getheadimg()
				// this.$forceUpdate()
			})
		},
		methods: {
			getheadimg () {
				// console.log()
				db.collection('user').where({
				  _openid: this.findcatdata._openid
				  
				}).get({}).then(res => {
					// console.log(res)
					this.headimg = res.data[0].avatarUrl
					console.log("4")
				})
			},
			gotoCenter() {
				uni.navigateTo({
					url:'../personalCenter/personalCenter?id=' + this.findcatdata._openid
				})
			},
			copywechat () {
				console.log(this.findcatdata.masterWechat)
				wx.setClipboardData({
					data: this.findcatdata.masterWechat,
					success: function (res) {
						console.log(res)
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			copyphone () {
				wx.setClipboardData({
					data: this.findcatdata.masterPhone,
					success: function (res) {
						
					}
				})
			},
			getdate (data) {
				this.date = `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}  ${data.getHours()}:${data.getMinutes()}`
				console.log("3")
			},
			getLocation (data) {
				for (var i=0; i<areaData.length; i++) {
					if (areaData[i].value == data[0]) {
						for (var j=0; j<areaData[i].children.length; j++) {
							if (areaData[i].children[j].value == data[1]) {
								this.location = areaData[i].children[j].label
								this.province = areaData[i].label
								break
							}
						}
					}
				}
				// console.log("2")
			},
			async getimgurl () {
				
				for (var i=0;i<this.findcatdata.imgList.length;i++) {
					var url = await wx.cloud.downloadFile({
									  fileID: this.findcatdata.imgList[i], // 文件 ID
									  
									})
									
					this.imgs.push(url.tempFilePath)
				}
				this.loading = false
				// console.log("1")
			}
		}
	}
</script>

<style scoped>
.body{
	background-color: rgba(230,230,230,0.5);
	min-height: 100vh;
	padding-bottom: 30rpx;
}
.header{
	background-color: #fff;
	margin-bottom: 20rpx;
}
.nameType{
	color: #F4AE26;
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
	/* display: flex;
	justify-content: space-around; */
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
	margin-bottom: 165rpx;
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
