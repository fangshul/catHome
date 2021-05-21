<template>
	<view class="publish-wrap bg-white">
		<view class="input-box padding-sm">
			<textarea class="area-top" placeholder="碎碎念..." v-model="content"></textarea>
		</view>
		<view class="cu-form-group img-box">
			<view class="next-title">上传图片（最多9张）</view>
			<view class="img-wrap margin-none">
				<view class="grid col-4 grid-square flex-sub padding-top-lg">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index">
						<image :src="imgList[index]" mode="aspectFill" @tap="ViewImage(index)" class="img-item"></image>
						<image src="@/static/images/push/img_close.png" @tap.stop="DelImg" :data-index="index" mode="widthFix" class="close-img"></image>
					</view>
					<view class="add-img" @tap="ChooseImage" v-if="imgList.length<9">
						<text class='cuIcon-add link-color'></text>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom-btn flex-center" @click="push">
			<view class="btn">发布</view>
		</view>
		<cl-toast ref="toast"></cl-toast>
		<cl-loading-mask
			v-if="ifloading"  
			:fullscreen="true" 
			:loading="true" 
			:text="loadingText">
			
		</cl-loading-mask>
		<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
	const db = wx.cloud.database()
	const forum = db.collection('forum')
	
	import randomName from '../../static/randomName.js'
	export default {
		data() {
			return {
				imgList: [],
				content: '',
				ifloading: false,
				loadingText: ''
			};
		},
		methods: {
			// 选择图片
			ChooseImage() {
				let that = this
				uni.chooseImage({
					count: 9, //默认9
					sizeType: ['original'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						let imgurl = res
						res.tempFilePaths.forEach(items => {
							wx.getFileSystemManager().readFile({
								filePath: items,
								success: res => {
									wx.cloud.callFunction({
										name: 'imgSecCheck',
										data:{
											img: res.data
										}
									}).then(res => {
										if (res.result.code == 200) {
											if (that.imgList.length != 0) {
												that.imgList = that.imgList.concat(imgurl.tempFilePaths)
											} else {
												that.imgList = imgurl.tempFilePaths
											}
											console.log("图片可以")
										} else if (res.result.code == 500) {
											console.log("图片不ok")
											that.$refs["toast"].open({
												type: "warning",
												message: "内容含有违法违规内容",
												position: "middle",
												icon:"warning",
												// duration: 100000
												// type: 'warning'
											})
										}
									})
								}
							})
						})
						
					}
				});
			},
			//显示删除弹窗
			DelImg(e) {
				let that = this
				that.imgList.splice(e.currentTarget.dataset.index, 1)
			},
			// 预览图片
			ViewImage(index) {
				let that = this
				uni.previewImage({
					current: index,
					urls: that.imgList
				})
			},
			async push () {
				var that = this
				
				// that.load = true
				// 处理图片
				var imgfildid = []
				console.log(this.imgList)
				console.log(this.content)
				for (var i=0; i<this.imgList.length; i++) {
					var imgurl = await wx.cloud.uploadFile({
					  cloudPath: 'forum/'+randomName()+'.png', // 上传至云端的路径
					  filePath: this.imgList[i], // 小程序临时文件路径
					 
					})
					imgfildid.push(imgurl.fileID)
					// console.log(imgurl)
				}
				
				console.log(that.content)
				
				
				if (this.content === '') {
					this.$refs["toast"].open({
						type: "warning",
						message: "内容不能为空",
						position: "middle",
						icon:"warning",
						
					})
				} else {
					that.ifloading = true
					that.loadingText = "发布中"
					
					wx.cloud.callFunction({
						name: "checkStr",
						data: {
							inputText: that.content
						},success (res) {
							console.log('ok',res)
							
							forum.add({
								data:{
									content: that.content,
									viewed: 0,
									imgList: imgfildid,
									date: new Date(),
									like: 0,
									comment : [],
									likes: []
									
								},
								success: res => {
									that.ifloading = false
									
									that.$refs["toast"].open({
										type: "success",
										message: "发布成功",
										position: "middle",
										icon:"success",
										
									})
									uni.reLaunch({
										url: '../Forum/Forum'
									})
									
									
								},
								fail: err => {
									that.ifloading = false
									that.$refs["toast"].open({
										type: "error",
										message: "发布失败",
										position: "middle",
										icon:"error",
										
									})
									console.log(err)
								}
							})
						
							
						},fail (err) {
							that.ifloading = false
							that.content = ""
							that.$refs["toast"].open({
								type: "warning",
								message: "内容含有违法违规内容",
								position: "middle",
								icon:"warning",
								// duration: 100000
								// type: 'warning'
							})
							// console.log('err',err)
						}
					})
					
					
					
				}
				
				
			
				
				
			}
		}
	}
</script>

<style lang="less" scoped>
	.publish-wrap {
		.input-box {
			.area-top {
				width: 100%;
				box-shadow: inset 0 -1px 0 0 #ECECEC;
				min-height: 280rpx;
			}
		}

		.img-box {
			padding: 30rpx;
			display: flex;
			flex-direction: column;
			margin-top: 20rpx;
			margin-bottom: 160rpx;

			.next-title {
				width: 100%;
				font-size: 36rpx;
				color: var(--mainColor);
			}

			.font-red {
				color: #ff0000;
			}

			.img-wrap {
				width: 100%;
				font-size: 28rpx;
				line-height: 44rpx;
				color: #999999;
				margin: 20rpx 0;
			}

			.add-img {
				border: 4rpx dashed #999;
				font-size: 40rpx;
			}
		}

		.bottom-btn {
			position: fixed;
			bottom: 0;
			width: 100%;
			padding: 20rpx 0;

			.btn {
				border-radius: 40rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #FFFFFF;
				border: 1rpx solid var(--activeColor);
				background-color: var(--activeColor);
				box-shadow: 0 1px 10px 0px var(--activeColor);
				width: 400rpx;
				height: 80rpx;
			}
		}
	}

	.bg-img {
		overflow: visible !important;

		.img-item {
			border-radius: 20rpx;
		}

		.close-img {
			position: absolute;
			width: 36rpx !important;
			top: -18rpx;
			right: -18rpx;
		}
	}
</style>
