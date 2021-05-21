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
			@changcatinfo = "changeType"
			@changlocation="changeLocation"
		></selector>
		<view class="cu-card article" :class="isCard?'no-card':''">
			<navigator 
				
				v-for="(item,index) in adoptdata" 
				:key="index"  
				v-if="!item.ifadopt"
				class="cu-item shadow " 
				:url='"../AdoptDetail/AdoptDetail?id="+item._id' >
				<view class="title">
					<view class="text-cut">
						
						{{ item.petAge }}岁 的 猫猫 <text style="color: #F4AE26;"> {{ item.petName }} </text> 正在找家
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
		<view class="nomore">--  暂无更多  --</view>
	</view>
</template>

<script>
	const db = wx.cloud.database()
	const adopt = db.collection('adopt')
	
	import selector from '@/components/selector/selector.vue'
	export default {
		components:{
			selector
		},
		data() {
			return {
				isCard: false,
				adoptdata: '' ,
				ifloading: true
			};
		},
		onShow() {
			this.getdata()
		},
		methods: {
			async changeType (data) {
				console.log('fa',data.value)
				this.ifloading = true
				if (data.prop == "type") {
					
					console.log("种类")
					const cattype = await adopt.orderBy('date','desc').where({
										  petType: data.value
										}).get({})
										
					this.adoptdata = cattype.data
					
					this.getimgurl()
				} else if (data.prop == "sex") {
					console.log("xbie")
					const catsex = await adopt.orderBy('date','desc').where({
										  petSex: data.value
										}).get({})
										
					this.adoptdata = catsex.data
					
					this.getimgurl()
				} else if (data.prop == "rank") {
					console.log("xinxi")
					let catinfo = {}
					for (var i =0; i<data.value.length; i++ ) {
						if (data.value[i] == 1) {
							catinfo.sterilization = true
						} else if (data.value[i] == 2) {
							catinfo.expellingParasite = true
						} else {
							catinfo.vaccine = true
						}
					}
					console.log(catinfo)
					const detail = await adopt.orderBy('date','desc').where(
						catinfo
					).get({})
					this.adoptdata = detail.data
					
					this.getimgurl()					
					console.log(detail)
										
				}
			},
			async changeLocation (data) {
				this.ifloading = true
				console.log('father',data)
				
				const selectdata = await adopt.orderBy('date','desc').where({
				  adoptLocation: data
				}).get({})
				
				this.adoptdata = selectdata.data
				
				this.getimgurl()
			},
			IsCard(e) {
				this.isCard = e.detail.value
			},
			async getdata () {
				var loca = uni.getStorageSync('location')
				const alldata = await adopt.orderBy('date','desc').where({
					adoptLocation: loca
				}).get({
					
				})
				console.log(alldata)
				this.adoptdata = alldata.data
				
				this.getimgurl()
				
			},
			async getimgurl () {
				for (var i=0;i<this.adoptdata.length;i++) {
					var url = await wx.cloud.downloadFile({
								  fileID: this.adoptdata[i].imgList[0], // 文件 ID
								  
								})
								
					console.log(url.tempFilePath)
					this.adoptdata[i].headImg = url.tempFilePath
					
					this.$forceUpdate()
				}
				console.log(this.adoptdata)
				this.ifloading = false
				// return url
			}
			
		}
	}
</script>

<style scoped lang="scss">
.body{
	width: 100vw;
	min-height: 100vh;
	background-color: rgba(230,230,230,0.5);
	
	.nomore{
		text-align: center;
	}
}
</style>
