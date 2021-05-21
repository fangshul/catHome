<template>
	<view class="body">
		<cl-loading-mask 
			:loading="true"  
			text="拼命加载中"
			:fullscreen="true"
			v-if="ifloading"
			>
			
		</cl-loading-mask>
		<selector 
			:ifinfo="false"
			 @changcatinfo = "changeType"
			 @changlocation="changeLocation"></selector>
		<view class="cu-card article" :class="isCard?'no-card':''">
			<navigator 
				
				v-for="item in info"
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
							<!-- <view class="cu-tag bg-red light sm round">正义天使</view>
							<view class="cu-tag bg-green light sm round">史诗</view> -->
						</view>
					</view>
				</view>
			</navigator>
			
			
		</view>
		<view class="nomore">--  暂无更多  --</view>
	</view>
</template>

<script>
	import areaData from '../../static/area-data-min.js'
	import selector from '@/components/selector/selector.vue'
	
	const db = wx.cloud.database()
	const todos = db.collection('findCat')
	export default {
		data() {
			return {
				info: '',
				ifloading: true
				
			}
		},
		onShow() {
			this.getdata()
		},
		mounted() {
			// const that = this
			
		},
		methods: {
			getLocation () {
				for (var m =0; m < this.info.length; m++) {
					var data = this.info[m].lostLocation
					
					for (var i=0; i<areaData.length; i++) {
						if (areaData[i].value == data[0]) {
							for (var j=0; j<areaData[i].children.length; j++) {
								if (areaData[i].children[j].value == data[1]) {
									this.info[m].loca = areaData[i].children[j].label
									console.log(this.info[m].loca )
									// this.province = areaData[i].label
									// break
								}
							}
						}
					}
				}
				
				// console.log("2")
			},
			async changeType (data) {
				console.log('fa',data.value)
				this.ifloading = true
				if (data.prop == "type") {
					const cattype = await todos.where({
										  petType: data.value
										}).get({})
										
					this.info = cattype.data
					
					this.getimgurl()
				} else if (data.prop == "sex") {
					const catsex = await todos.where({
										  petSex: data.value
										}).get({})
										
					this.info = catsex.data
					
					this.getimgurl()
				}
			},
			async changeLocation (data) {
				this.ifloading = true
				console.log('father',data)
				
				const selectdata = await todos.where({
				  lostLocation: data
				}).get({})
				
				this.info = selectdata.data
				
				this.getimgurl()
			},	
			async getdata () {
				var loca = uni.getStorageSync('location')
				const alldata = await todos.orderBy('date','desc').where({
					lostLocation: loca
				}).get({
					
				})
				this.info = alldata.data
				
				// alldata.forEach(items => {
				// 	this.getLocation()
				// })
				this.getLocation()
				this.getimgurl()
				
				
				
			},
				
			async getimgurl (fileid) {
				for (var i=0;i<this.info.length;i++) {
					var url = await wx.cloud.downloadFile({
								  fileID: this.info[i].imgList[0], // 文件 ID
								  
								})
								
					console.log(url.tempFilePath)
					this.info[i].headImg = url.tempFilePath
					
					this.$forceUpdate()
				}
				console.log(this.info)
				this.ifloading = false
				// return url
			}
			
		}
	}
</script>

<style lang="scss" scoped>
.body{
	width: 100vw;
	min-height: 100vh;
	background-color: rgba(230,230,230,0.5);
	// .nameType{
		
	// }
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
