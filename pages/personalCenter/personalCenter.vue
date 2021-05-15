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
					<navigator 
						class="status" 
						v-for="item in status" :key="index" 
						:url="item.nexturl">
						<image class="icon" :src="item.url" mode="aspectFill"></image>
						<text>{{item.name}}</text>
					</navigator>
					
				</view>
				
			</view>
			<view class="baiban">

			</view>
			
			<view>
				<view class="person_title">他的领养</view>
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
		</view>
	</view>
</template>

<script>
	const db = wx.cloud.database()
	export default {
		data() {
			return {
				nickname: "",
				headImg:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn11%2F600%2Fw700h700%2F20180424%2F514b-fzqvvsa3694420.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622959077&t=b701606d5bdedcef64ca889f3d23acd0',
				status: [{
						key: 1,
						name: '领养',
						url: '../../static/images/personal/adopt.png',
						nexturl: '../myAdopt/myAdopt'
					},
					{
						key: 2,
						name: '寻猫',
						url: '../../static/images/personal/findcat.png',
						nexturl: '../myFindcat/myFindcat'
					},
					{
						key: 3,
						name: '讨论',
						url: '../../static/images/personal/message.png',
						nexturl: '../myForum/myForum'
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
		methods: {
			
		},
		onLoad (option) {
			console.log(option)
			db.collection('user').where({
			  _openid: option.id
			  
			}).get({}).then(res => {
				console.log(res)
				this.headImg = res.data[0].avatarUrl
				this.nickname = res.data[0].name
				
			})
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
