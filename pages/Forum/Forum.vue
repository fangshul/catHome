<template>
	<view class="home">
		<view class="card-bottom">
			 <view v-if="alldata.length == 0" style=" text-align: center;">-- 暂无更多 --</view>
			<!-- 顶部分页栏 -->
			<!-- <view class="top-tab">
				<view :class="['tab-item flex-center', activeTab == index ? 'active' : '']" @tap="handleTab(index)" v-for="(item, index) in tabList" :key="index">{{ item.title }}</view>
			</view> -->
			<y-Refresh ref="mixPulldownRefresh" :top="100" @refresh="onPulldownReresh">
				<view class="scroll-wrapper">
					<!-- 漂流瓶 -->
					<!-- v-if="activeTab == 0" -->
					<view >
						<view 
							class="margin-bottom" 
							v-for="(item, index) in alldata" 
							:key="index">
							<y-DiaryItem @like="changelike" :obj="item" />
						</view>
					</view>
					<!-- 聚集岛 -->
					<!-- <view v-else> -->
						<!-- <view class="margin-bottom" v-for="(item, index) in rightList" :key="item.id">
							<y-DiaryItem :obj="item" />
						</view> -->
					<!-- </view> -->
					<!-- <y-LoadMore :status="loadMoreStatus" /> -->
				</view>
			</y-Refresh>
			<!-- 右下角按钮 -->
			<y-Fab :bottom="140" :right="40" :btnList="fabList" @click="handleFab" />
		</view>
		<cl-toast ref="toast"  ></cl-toast>
		<cl-loading-mask v-if="load" :loading="true" text="拼命加载中">
			
		</cl-loading-mask>
		<!-- <view style="margin-top: 20rpx; text-align: center;">-- 暂无更多 --</view> -->
	</view>
</template>

<script>
	const db = wx.cloud.database()
	const forum = db.collection('forum')
	// import yRefresh from '../../components/y-Refresh/y-Refresh.vue'
	// import yDiaryItem from '../../components/y-DiaryItem/y-DiaryItem.vue'
	// import yLoadMore from '../../components/y-LoadMore/y-LoadMore.vue'
	// import yFab from '../../components/y-Fab/y-Fab.vue'
	
var that;
export default {
	// components:{
	// 	yRefresh,
	// 	yDiaryItem,
	// 	yLoadMore,
	// 	yFab
	// },
	data() {
		return {
			// msg: false,
			load: true,
			startNum: 0,
			activeTab: 0,
			// tab的名称
			// tabList: [
			// 	{
			// 		title: '漂流瓶'
			// 	},
			// 	{
			// 		title: '聚集岛'
			// 	}
			// ],
			cardList: [],
			// rightList: [],
			loadMoreStatus: 1, //0加载前，1加载中，2没有更多了
			//fab的设置
			fabList: [
				{
					bgColor: '#16C2C2',
					text: '发布',
					fontSize: 28,
					color: '#fff'
				},
				// {
				// 	bgColor: '#37b59d',
				// 	text: '分享',
				// 	fontSize: 28,
				// 	color: '#fff'
				// }
			],
			alldata: []
		};
	},
	onShow() {
		this.load = true
		this.alldata = []
		that = this;
		// that.loadData('add');
		console.log('open',uni.getStorageSync('openid') == '')
		if (uni.getStorageSync('openid') == undefined ||uni.getStorageSync('openid') == '' ) {
			this.load = false
			 this.$refs["toast"].open({
			          message: "请先到 ‘我的’ 页面进行登陆",
					  position: "middle",
					  
			        })
			
		} else {
			that.getdata()
		}
	},
	onLoad() {
		
		// that.rightList = that.$store.state.diary.rightList
	},
	onReachBottom() {
		that.startNum++;
		//上滑加载
		// that.loadData('add');
		
	},
	methods: {
		async changelike (data) {
			console.log(data)
			var likes  = await	db.collection('user').where({
									  _openid:uni.getStorageSync('openid')
								  }).get()
			
			let list = 	likes.data[0].likeforum
			// 点击变为喜欢
			if (data.islike == false) {
				
				
				list.push(data.id)
				db.collection('user').where({
					  _openid:uni.getStorageSync('openid')
				  }).update({
				  // data 传入需要局部更新的数据
				  data: {
				    // 表示将 done 字段置为 true
				    likeforum: list
				  },
				  success: function(res) {
				    console.log(res)
				  }
				})
				
				var forumitem = await forum.doc(data.id).get()
				forumitem.data.like = data.likeforum
				var likelist = forumitem.data.likes
				console.log(likelist)
				likelist.push(uni.getStorageSync('openid'))
				forum.doc(data.id).update({
					data: {
						like: data.likenum+1,
						likes: likelist
					},
					success: res => {
						console.log(res)
					}
				})
				console.log('item',forumitem)
				// console.log(likes.data[0].likeforum)
			} else {
				// 点击变为不喜欢
				for (var i=0; i<list.length; i++) {
					if (data.id == list[i]) {
						list.splice(i,1)
					}
				}
				
				console.log(list)
				db.collection('user').where({
					  _openid:uni.getStorageSync('openid')
				  }).update({
				  // data 传入需要局部更新的数据
				  data: {
				    // 表示将 done 字段置为 true
				    likeforum: list
				  },
				  success: function(res) {
				    console.log(res)
				  }
				})
				
				forum.doc(data.id).update({
					data: {
						like: data.likenum-1
					},
					success: res => {
						console.log(res)
					}
				})
				
			}
		},
		async getdata () {
			const forumdata = await forum.orderBy('date','desc').get({})
			console.log('a',forumdata)
			for (var i=0; i<forumdata.data.length; i++) {
				let item = {}
				item.id = forumdata.data[i]._id
				item.title = forumdata.data[i].content
				item.likeNum = forumdata.data[i].like
				let imgs = []
				for (var j=0; j<forumdata.data[i].imgList.length;j++) {
					var url = await wx.cloud.downloadFile({
									  fileID: forumdata.data[i].imgList[j], // 文件 ID
									  
									})
									
					imgs.push({
						url: url.tempFilePath
					})
									
				}
				
				item.imgList = imgs
				// item.createTime = forumdata.data[i].date
				item.createTime = `${ forumdata.data[i].date.getMonth() + 1}-${forumdata.data[i].date.getDate()}`
				console.log("commit",forumdata.data[i].comment)
				item.commentNum = forumdata.data[i].comment.length
				
				var userinfo = await db.collection('user').where({
									  _openid: forumdata.data[i]._openid
								  }).get()
								  
				item.avatarUrl = userinfo.data[0].avatarUrl
				item.nickName = userinfo.data[0].name
				var myinfo = await db.collection('user').where({
									  _openid: uni.getStorageSync('openid')
								  }).get()
				for (var x =0; x<myinfo.data[0].likeforum.length; x++) {
					if (myinfo.data[0].likeforum == forumdata.data[i]._id) {
						item.isLike = true
						break
					}
				}
				if (item.isLike == undefined) {
					item.isLike = false
				}
				console.log(item.isLike)
				this.alldata.push(item)
			}
			
			// alldata = forumdata.data
			
			console.log(this.alldata)
			this.load = false
			console.log(this.load)
			
		},
		toDetails(id){
			uni.navigateTo({
				url: '../diary/details/details?id=' + id 
			})
		},
		// toOther(id){
		// 	uni.navigateTo({
		// 		url: '../mine/other/other?id=' + id
		// 	})
		// },
		loadData(type) {
			if (type === 'add') {
				// 上拉加载
				let list = that.cardList;
				if (list.length == 8) {
					that.loadMoreStatus = 2;
				} else if (list.length > 0) {
					that.cardList = that.cardList.concat({
						id: 2,
						time: '06-17',
						avatarUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=146873609,3496106191&fm=26&gp=0.jpg',
						nickName: '小黄鸭',
						title: '洛稚喜欢盛淮南谁也不知道',
						follow: false,
						isLike: false,
						likeNum: '24',
						commentNum: '0',
						imgList: [
							{
								url: 'https://6d61-matchbox-79a395-1302390714.tcb.qcloud.la/matchbox/1e942ff08083714184afbf42eba0d87.jpg'
							}
						]
					});
				} else {
					that.cardList = that.$store.state.diary.cardList
				}
			} else {
				//下拉刷新
				that.$refs.mixPulldownRefresh && that.$refs.mixPulldownRefresh.endPulldownRefresh();
			}
		},
		//下拉刷新
		onPulldownReresh() {
			that.loadData('refresh');
		},
		handleTab(index) {
			that.activeTab = index;
		},
		//点击右下角tab按钮
		handleFab(e) {
			let index = e.index;
			switch (index) {
				case 0:
					uni.navigateTo({
						url: '../push/push'
					});
					break;
				case 1:
					console.log(1);
					break;
			}
		}
	}
};
</script>

<style lang="less" scoped>
.home {
	// padding-top: 120rpx;

	.top-barrage {
		width: 100%;
		height: 320rpx;
		overflow: hidden;
	}

	.card-bottom {
		width: 100%;

		.top-tab {
			display: flex;
			height: 120rpx;
			position: fixed;
			top: 0;
			width: 100%;
			z-index: 100;
			background-color: #ffffff;

			.tab-item {
				flex: 1;
				color: #999;
				border-bottom: 4rpx solid #ececec;
			}

			.active {
				color: var(--mainColor);
				border-bottom: 4rpx solid var(--mainColor);
			}
		}
	}
}
</style>
