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
				
				
			</view>
		</view>
		<view class="adopt">
			<view class="titleText">
				最新领养
			</view>
			
			<view class="cu-card article" :class="isCard?'no-card':''">
				<navigator
					v-for="(item,index) in adoptdata" 
					:key="index" 
					 v-if="!item.ifadopt"
					class="cu-item shadow " 
					:url='"../AdoptDetail/AdoptDetail?id="+item._id' >
					<view class="title">
						
						<view class="text-cut">
							
							{{ item.petAge }}岁 的 猫猫 <text style="color: #F4AE26;"> {{ item.petName }} </text>   正在找家
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
				
			</view>
		</view>
		<view class="find">
			<view class="titleText">
				最新寻猫
			</view>
			
			<view class="cu-card article" :class="isCard?'no-card':''">
				<navigator
					
					v-for="(item,index) in findcat"
					v-if="!item.iffind"
					:key="index"
					:url="'../FindcatDetail/FindcatDetail?id='+item._id"
					class="cu-item shadow">
					
					<view class="title">
						<view class="text-cut">
							
							猫咪 <text style="color: #F4AE26;"> {{ item.petName }} </text> 丢失，请求帮忙
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
									丢失地点：{{ item.loca }}
								</view>
								
							</view>
						</view>
					</view>
				</navigator>
				
			</view>
		</view>
			
		<cl-loading-mask v-if="load" :loading="true" text="拼命加载中">
			
		</cl-loading-mask>
	</view>
</template>

<script>
	const db = wx.cloud.database()
	const todos = db.collection('findCat')
	const adopt = db.collection('adopt')
		import areaData from '../../static/area-data-min.js'
	import carousel from '@/components/vear-carousel/vear-carousel'
	export default {
		components:{
			carousel
		},
		data() {
			return {
				load: '',
				title: 'Hello',
				imgList: [{
					url: 'http://192.168.220.1:3333/images/headimg1.png',
					id: 1
				},
				{
					url: 'http://192.168.220.1:3333/images/headimg2.png',
					id: 2
				},{
					url: 'http://192.168.220.1:3333/images/headimg3.jpg',
					id: 3
				}
				// ,{
				// 	url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3488207672,3352446836&fm=26&gp=0.jpg',
				// 	id: 1
				// },
				// {
				// 	url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2653786338,2258592089&fm=26&gp=0.jpg',
				// 	id: 2
				// },
				
				],
				findcat: [],
				adoptdata:[]
			}
		},
		onShow () {
			this.load = true
			this.findcat = []
			this.adoptdata = []
			// 加载寻猫
			this.getfindcatdata()
			// 加载领养
			this.getadoptdata()
		},
		onLoad() {
			var _this = this
			// wx.openSetting({
			// var transform = require('wgs2mars');
			// var gcjloc = transform(119.3122312,26.0240049);	
			// // }) 
			// console.log('city',gcjloc)
			// uni.getLocation({
			//     type: 'gcj02', //返回可以用于uni.openLocation的经纬度
			//     success:(res)=>{
			// 		let that=this
			//         const latitude = res.latitude;
			//         const longitude = res.longitude;
			// 		console.log(res)
			//         uni.request({
			// 			header:{
			// 				"Content-Type": "application/text"
			// 			},
			// 			//注意:这里的key值需要高德地图的 web服务生成的key  只有web服务才有逆地理编码
			// 			url:'https://restapi.amap.com/v3/geocode/regeo?output=JSON&location='+res.longitude+','+res.latitude+'&key=280802ed0116fef931dbcf5e7e9278d7&radius=1000&extensions=all',
			// 			success(re) {
			// 				console.log(re)
			// 				if(re.statusCode===200){
			// 					// that.citydata=re.data.regeocode.addressComponent.city
			// 					// re.data.regeocode.addressComponent.province
			// 					// console.log("获取中文街道地理位置成功",that.citydata)
			// 					// _this.$city = re.data.regeocode.addressComponent.city
			// 					// _this.$province = re.data.regeocode.addressComponent.province
								
			// 					uni.setStorageSync('city',re.data.regeocode.addressComponent.city)
			// 					uni.setStorageSync('province',re.data.regeocode.addressComponent.province)
			// 					// console.log(_this.$city)
			// 					// console.log(_this.$province)
							
			// 				}else{
			// 					console.log("获取信息失败，请重试！")
			// 				}
			// 			 }
			// 		});
			//     }
			// });


			wx.getLocation({
			 type: 'wgs84',
			 success (res) {
				 console.log(res)
			   const latitude = res.latitude
			   const longitude = res.longitude
			   const speed = res.speed
			   const accuracy = res.accuracy
			   _this.getProvinceName(latitude,longitude)
			 }
			})
			
			// 轮播图
			// wx.cloud.downloadFile({
			//   fileID: 'cloud://cloud1-4grgkkd40c94fb6a.636c-cloud1-4grgkkd40c94fb6a-1305831904/lunbo.png',
			//    // 文件 ID
			//   success: res => {
			// 	  console.log(res.tempFilePath)
			// 	  this.imgList.push({
			// 		  url: res.tempFilePath,
			// 		  id: 3
			// 	  })
			//   }
			// })
			// wx.cloud.downloadFile({
			//   fileID: 'cloud://cloud1-4grgkkd40c94fb6a.636c-cloud1-4grgkkd40c94fb6a-1305831904/headimg2.png',
			//    // 文件 ID
			//   success: res => {
			// 	  console.log(res.tempFilePath)
			// 	  this.imgList.push({
			// 		  url: res.tempFilePath,
			// 		  id: 2
			// 	  })
			//   }
			// })
		},
		methods: {
			getLocation () {
				for (var m =0; m < this.findcat.length; m++) {
					var data = this.findcat[m].lostLocation
					
					for (var i=0; i<areaData.length; i++) {
						if (areaData[i].value == data[0]) {
							for (var j=0; j<areaData[i].children.length; j++) {
								if (areaData[i].children[j].value == data[1]) {
									this.findcat[m].loca = areaData[i].children[j].label
									console.log(this.findcat[m].loca )
									// this.province = areaData[i].label
									// break
								}
							}
						}
					}
				}
			},
			getProvinceName(latitude, longitude){
			    wx.request({
			      url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=4W2BZ-WTC3J-IC4FD-KFYJG-63EF6-K2FAA',   
			      data:{},
			      success: (res)=> {
			        console.log('now',res)
					uni.setStorageSync('city',res.data.result.address_component.city)
					uni.setStorageSync('province',res.data.result.address_component.province)
			       // res.data.result.address_component.province   就是我要获取的省份了；
			        // });
			      }
			    })
			  },

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
				if (this.load) {
					this.load = false
				}
			},
			async getfindcatdata () {
				const alldata = await todos.orderBy('date','desc').get({
					
				})
				console.log('find',alldata)
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
				
				this.getLocation()
				
				this.$forceUpdate()
				if (this.load) {
					this.load = false
				}
				
				
				
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
