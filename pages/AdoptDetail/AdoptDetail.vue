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
				{{ location }} 的猫猫 {{ adoptdetail.petName }} 正在找家
				<!-- 韶关市的猫猫宿舍正在找家 -->
			</view>
			<view class="info">
				<view class="viewed">浏览量：{{ adoptdetail.viewed }}</view>
				<view class="update">更新: {{ date }}</view>
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
				<view>
					{{ adoptdetail.story }}
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
				<text>{{ costs[adoptdetail.cost].label }}</text>
			</view>
			<view class="cu-item arrow" >
				<view
					:key = "index"
					class="content cost" 
					v-for="(index,item) in adoptdetail.condition">
					<text class="cuIcon-info text-grey"></text>
					<text class="text-grey">{{ conditions[item].label }}</text>
				</view>
				<!-- <view class="content">
					<text class="cuIcon-info text-grey"></text>
					<text class="text-grey">需要带去绝育</text>
				</view> -->
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
						<view 
							class=" masterImg cu-avatar xl round margin-left" 
							:style='"background-image:url("+ headimg +");"'>
						</view>
						<view class="mastername">
							{{adoptdetail.masterName}}
							<view class="buttonbox">
								<cl-button size="small" @click.stop="copywechat" round shadow="true">
									<text class="cuIcon-copy copybutton"></text>
									<text class="copybutton" >复制微信号</text>
									
								</cl-button>
								<cl-button v-if="adoptdetail.disphone" @click.stop="copyphone" size="small"  round  shadow="true">
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
	const db = wx.cloud.database()
	const adopt = db.collection('adopt')
	
	import areaData from '../../static/area-data-min.js'
	import catType from '@/static/cat.js'
	
	export default {
		data() {
			return {
				loading: true,
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
				}],
				adoptdetail: '',
				location: '',
				province: '',
				date: '',
				headimg: '',
				imgs: [],
				conditions: [
				    {
				        label: '仅限同城', // 展示的名称
				        value: 1  // 表单提交的值
				    },
				    {
				        label: '按时打疫苗',
				        value: 2
				    },
				    {
				        label: '同意适龄绝育',
				        value: 3
				    },
				    {
				        label: '不得遗弃、转让、贩卖、繁殖、虐待',
				        value: 4
				    },
					{
					    label: '有防盗门，必须封网',
					    value: 5
					},
					{
					    label: '接受领养前家访，领养后回访',
					    value: 6
					},
					{
					    label: '家庭成员全员同意',
					    value: 7
					},
					{
					    label: '工作稳定，有一定经济基础',
					    value: 8
					},
					{
					    label: '文明养宠，科学喂养',
					    value: 9
					},
					{
					    label: '签订领养协议',
					    value: 10
					},
					{
					    label: '按时打疫苗',
					    value: 11
					}
				],
				costs:  [
						        {
						            label: '免费', // 展示的名称
						            value: 1 // 表单提交的值
						        },
						        {
						            label: '收押金',
						            value: 2
						        },
						        {
						            label: '收费',
						            value: 3
						        }
						    ]
			}
		},
		onShow() {
			
		},
		onLoad(option) {
			console.log("load")
			
			console.log(option)
			adopt.doc(option.id).get().then(res => {
				this.adoptdetail = res.data
				var views = this.adoptdetail.viewed+1
				adopt.doc(option.id).update({
				  // data 传入需要局部更新的数据
				  data: {
				    // 表示将 done 字段置为 true
				    viewed: views
				  },
				  success: function(data) {
				    console.log('update',data)
				  }
				})
				
				
				console.log(res)
				this.catData[0].info = this.adoptdetail.petName
				this.catData[1].info = this.adoptdetail.petSex == 1 ? '女孩' : '男孩'
				this.catData[2].info = this.adoptdetail.petAge + '岁'
				this.catData[3].info = this.adoptdetail.expellingParasite == true ? '已驱虫' : '未驱虫'
				this.catData[4].info = this.adoptdetail.sterilization== true ? '已绝育' : '未绝育'
				this.catData[5].info = this.adoptdetail.vaccine == true ? '已免疫' : '未免疫'
				
				this.getLocation(this.adoptdetail.adoptLocation)
				this.getdate(this.adoptdetail.date)
				
				this.getimgurl()
			})
			
			
		},
		methods: {
			
			copywechat () {
				// console.log(this.findcatdata.masterWechat)
				wx.setClipboardData({
					data: this.adoptdetail.masterWechat,
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
					data: this.adoptdetail.masterPhone,
					success: function (res) {
						
					}
				})
			},
			getdate (data) {
				this.date = `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}  ${data.getHours()}:${data.getMinutes()}`
				console.log("3")
			},
			gotoCenter() {
				uni.navigateTo({
					url:'../personalCenter/personalCenter?id=' + this.adoptdetail._openid
				})
			},
			getLocation (data) {
				for (var i=0; i<areaData.length; i++) {
					if (areaData[i].value == data[0]) {
						for (var j=0; j<areaData[i].children.length; j++) {
							if (areaData[i].children[j].value == data[1]) {
								this.location = areaData[i].children[j].label
								this.province = areaData[i].label
							}
						}
					}
				}
				// console.log("2")
			},
			async getimgurl () {
				
				for (var i=0;i<this.adoptdetail.imgList.length;i++) {
					var url = await wx.cloud.downloadFile({
									  fileID: this.adoptdetail.imgList[i], // 文件 ID
									  
									})
									
					this.imgs.push(url.tempFilePath)
				}
				
				db.collection('user').where({
				  _openid: this.adoptdetail._openid
				  
				}).get({}).then(res => {
					// console.log(res)
					this.headimg = res.data[0].avatarUrl
					console.log("4")
				})
				
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
