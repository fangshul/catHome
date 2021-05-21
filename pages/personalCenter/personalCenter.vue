<template>
	<view class="center">
		
		<view class="center_top" :style="{backgroundImage:'url('+headImg+')'}">
			<view class="mask"></view>
		</view>
		<view class="center_box_bg">
			<view class="profily">
				<view class="base">
					<view class="profily_header" :style="{backgroundImage:'url('+headImg+')'}">

					</view>
					<text>{{ nickname }}</text>
				</view>
				<view class="order_status">
					<view
					
					class="status"
					v-for="(item,index) in status" :key="index"
					 @click="getdata(index)">
						<image class="icon" :src="item.url" mode="aspectFill"></image>
						<text>{{item.name}}</text>
					</view>
					<!-- <navigator 
						class="status" 
						v-for="item in status" :key="index" 
						>
						
					</navigator> -->
					
				</view>
				
			</view>
			<view class="baiban">

			</view>
			
			<view v-if="ifadopt">
				<view class="person_title">他的领养</view>
				<view class="cu-card article" :class="isCard?'no-card':''">
					<navigator 
						v-for="(item,index) in adoptinfo" 
						class="cu-item shadow " 
						:key = "index"
						:url="'../AdoptDetail/AdoptDetail?id=' +item._id">
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
			</view>
			<view v-if="iffindcat">				
				<view class="person_title">他的寻猫</view>
				<view class="cu-card article" :class="isCard?'no-card':''">
					<navigator 
						
						v-for="(item,index) in findCatinfo"
						:v-if="!item.iffind"
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
			<view v-if="ifforum">
				<view class="person_title">他的讨论</view>
				<uni-list>
				  
					<uni-list-chat 
						v-for="(item,index) in foruminfo"
						:key = "index"
						:title="item.content" 
						:avatar="item.headImg" 
						
						:note="item.date.getMonth()+1 + ' - ' + item.date.getDate()" 
						
						badge-positon="left" 
						
						>
						 <view class="chat-custom-right">
							
						 </view>
					 </uni-list-chat>
				</uni-list>
			</view>
			<view style="margin-top: 20rpx; text-align: center;">-- 暂无更多 --</view>
		</view>
		
		<cl-loading-mask v-if="load" :loading="true" text="拼命加载中">
			
		</cl-loading-mask>
	</view>
</template>

<script>
	const db = wx.cloud.database()
	
	const adopt = db.collection('adopt')
	const findcat = db.collection('findCat')
	const forum = db.collection('forum')
	
	export default {
		data() {
			return {
				load: true,
				ifadopt: true,
				iffindcat: false,
				ifforum: false,
				adoptinfo: '',
				findCatinfo: '',
				foruminfo: '',
				id: '',
				nickname: "",
				headImg:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn11%2F600%2Fw700h700%2F20180424%2F514b-fzqvvsa3694420.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622959077&t=b701606d5bdedcef64ca889f3d23acd0',
				status: [{
						key: 1,
						name: '领养',
						url: '../../static/images/personal/adopt.png',
						// nexturl: 'getadopt'
					},
					{
						key: 2,
						name: '寻猫',
						url: '../../static/images/personal/findcat.png',
						// nexturl: 'getfindcat'
					},
					{
						key: 3,
						name: '讨论',
						url: '../../static/images/personal/message.png',
						// nexturl: 'getforum'
					}
					
				],
				menus: [
					{
						name: '消息',
						icon: '../../static/images/personal/feedback.png',
						key: 1,
						nexturl: '../Message/Message'
					},
					
					{
						name: '关于我们',
						icon: '../../static/images/personal/about.png',
						key: 6,
						nexturl: '../Message/Message'
					}

				]
			};
		},
		onShow () {
			// this.getadopt()
		},
		methods: {
			async getimgurl () {
				for (var i=0;i<this.adoptinfo.length;i++) {
					var url = await wx.cloud.downloadFile({
								  fileID: this.adoptinfo[i].imgList[0], // 文件 ID
								  
								})
								
					console.log(url.tempFilePath)
					this.adoptinfo[i].headImg = url.tempFilePath
					
					this.$forceUpdate()
				}
				console.log(this.adoptinfo)
				this.load = false
				// return url
			},
			getdata (data) {
				console.log('key',data)
				if (data == 0) {
					this.ifadopt = true
					this.iffindcat = false
					this.ifforum = false
					this.getadopt()
				} else if (data == 1) {
					this.ifadopt = false
					this.iffindcat = true
					this.ifforum = false
					// this.getfindcat()
				} else if (data == 2) {
					this.ifadopt = false
					this.iffindcat = false
					this.ifforum = true
					// this.getforum()
				}
			},
			async getadopt () {
				this.load = true
			 	var adoptdata = await adopt.where({
					_openid: this.id
				}).get()
				
				this.adoptinfo = adoptdata.data
				console.log('adopt',this.adoptinfo)
				
				this.getimgurl()
				
			},
			async getfindcat () {
				var findcatdata = await findcat.where({
					_openid: this.id
				}).get()
				
				this.findCatinfo = findcatdata
				console.log(findcatdata)
			},
			async getforum () {
				
				var forumdata = await forum.where({
					_openid: this.id
				}).get()
				
				this.foruminfo = forumdata
				console.log(forumdata)
			}
		},
		onLoad (option) {
			this.id = option.id
			console.log(option)
			db.collection('user').doc(this.id).get({}).then(res => {
				console.log('userinfo',res)
				this.headImg = res.data.avatarUrl
				this.nickname = res.data.name
			})
			// db.collection('user').where({
			//   _openid: option.id
			  
			// }).get({}).then(res => {
			// 	console.log(res)
			// 	this.headImg = res.data[0].avatarUrl
			// 	this.nickname = res.data[0].name
				
			// })
		},
		onShow() {
			
		},
		computed: {

		}
	}
</script>

<style lang="scss">
	button{
	background-color: rgba(255,255,255,0);
	// background-color:#fff; //可根据自己的背景颜色自行设置
	border-radius: 0rpx;
	padding:0rpx;
	margin:0rpx;
	display: inline-block;
	line-height: 1;
	}
	
	button::after{ /*button的边框样式是通过::after方式实现的*/
	border:none;
	}
	
	.button-hover{ /*点击后样式*/
	color:#000;
	background-color: rgba(255,255,255,0);
	}
	
	page {
		height: 100%;
	}

	.profily,
	.profily_header {
		border-radius: 8px;
	}

	.center {
		height: 100%;

		&_top {
			height: 18%;
			background:  no-repeat 0% 50%;
			background-size: cover;

			// background: #E6E6E6;
			.mask {
				background: rgba(0, 0, 0, .4);
				height: 100%;
			}
		}

		&_box_bg {
			background: #F9F9F9;
			position: relative;

			.profily {
				position: absolute;
				width: 90%;
				// border:1px solid #F7F7F7;
				margin: 0 auto;
				top: -100upx;
				left: 5%;
				background: #FEFEFE;
				padding: 35upx;
				box-sizing: border-box;
				box-shadow: 0px 2px 5px #EDEDED;
			}
		}
	}

	.base {
		display: flex;
		align-items: center;
		border-bottom: 2px solid #F6F6F6;
		padding-bottom: 35upx;
		position: relative;
		.profily_header {
			height: 120upx;
			width: 120upx;
			// background-image: url('../../static/fumou-center-template/header.jpg');
			background-size: 100%;
		}

		text {
			margin-left: 20px;
			font-size: 30upx;
		}
		
		image{
			position: absolute;
			height: 40upx;
			width: 40upx;
			right: 0px;
			top:0px;
		}
	}

	.order_status {
		display: flex;
		justify-content: space-between;
		margin-top: 35upx;

		.status {
			width: 140upx;
			font-size: 24upx;
			text-align: center;
			letter-spacing: .5px;
			display: flex;
			flex-direction: column;
			.icon {
				width: 50upx;
				height: 50upx;
				margin: 0 auto;
				margin-bottom: 5px;
				
			}
		}
	}

	.baiban {
		background: #FEFEFE;
		height: 300upx;
	}

	.center_menu {
		width: 100%;
		display: inline-block;
		
		.menu_item {
			font-size: 28upx;
			letter-spacing: 1px;
			padding: 14px 5%;
			background: #FEFEFE;
			overflow: hidden;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			position: relative;
			border-bottom: 1px solid #EFEFEF;
			.feedback{
				font-size: 28upx;
				margin-left: 10px;
				width: 90%;
				text-align: left;
			}

			&:hover {
				background: #F6F6F6 !important;
			}

			&::after {
				content: '';
				width: 30upx;
				height: 30upx;
				position: absolute;
				right: 5%;
				background: url('../../static/images/personal/right.png') no-repeat;
				background-size: 100%;
			}

			text:nth-of-type(1) {
				margin-left: 10px;
			}

			image {
				width: 40upx;
				height: 40upx;
			}

			&:nth-of-type(4) {
				margin-top: 10px;
			}
		}
	}
	.person_title{
		padding-left: 56rpx;
		font-size: 30rpx;
	}
</style>
