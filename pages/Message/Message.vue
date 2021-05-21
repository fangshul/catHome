<template>
	<view>
		<!-- <scroll-view scroll-x class="bg-white nav text-center">
			
			<view 
				class="cu-item" 
				:class="index==TabCur?'text-orange  cur':''" 
				v-for="(item,index) in bar" 
				:key="index" 
				@tap="tabSelect"
				:data-id="index">
				
				{{ item }}
			
			</view>
		</scroll-view> -->
		<uni-list>
			
				<uni-list-chat
					v-for="(item,index) in messdata"
					:key ="index"
					:title="item.name" 
					:avatar="item.leftimg" 
					
					:note="item.info + '-' + item.content" 
					
					badge-positon="left" 
					@click="gotodetail(item.id)"
					>
					
					 <view class="chat-custom-right">
						 <image :src="item.rightimg"></image>
					 </view>
				 </uni-list-chat>
		
			
		</uni-list>
	</view>
</template>

<script>
	
	const db = wx.cloud.database()
	const forum = db.collection('forum')
	
	
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		data() {
			return {
				messdata: []
				
				// bar:[
				// 	'领养',
					
				// 	'论坛'
				// ],
				// TabCur: 0,
			}
		},
		onShow() {
			this.getdata()
			// forum.orderBy('date','desc').where({
			// 	_openid: uni.getStorageSync('openid')
			// }).get({
			// 	success: res => {
			// 		console.log(res)
			// 	}
			// })
		},
		methods: {
			gotodetail (id) {
				uni.navigateTo({
					url: '../diary/details/details?id=' + id 
				})
			},
			async getlikes (data,i,item) {
				let d = item
				for (var j=0; j<data.data[i].likes.length;j++) {
					console.log('like',j)
					// this.this.messdata
					 d.info = '喜欢了您的讨论'
					 console.log(data.data[i].likes[j])
					var userinfo = await db.collection('user').where({
						  _openid: data.data[i].likes[j]
					  }).get()
					  
					  d.leftimg = userinfo.data[0].avatarUrl
					  d.name = userinfo.data[0].name
					  
					   console.log('like',d)
					  this.messdata.push(d)
					  // this.$forceUpdate()
					  
				}
			},
			async getcommit (data,i,item) {
				let da = []
				for (var k=0;k<data.data[i].comment.length; k++) {
					da[k] = item
					console.log('com',data.data[i].comment[k].nickName)
					
					da[k].leftimg = data.data[i].comment[k].avatarUrl
					da[k].name = data.data[i].comment[k].nickName
					 da[k].info = '评论了您的讨论'
					  console.log('com',da[k])
					 this.messdata.push(da[k])
					 // this.$forceUpdate()
				}
			},
			async getdata () {
				var data = await forum.orderBy('date','desc').where({
							_openid: uni.getStorageSync('openid')
						}).get() 
				console.log(data)
				for (var i=0; i< data.data.length; i++) {
					var item1 = {}
					var item2 = {}
					
					item1.content = data.data[i].content
					item2.content = data.data[i].content
					if (data.data[i].imgList.length == 0) {
						item1.rightimg = ''
						item2.rightimg = ''
					} else {
						var url = await wx.cloud.downloadFile({
						  fileID: data.data[i].imgList[0],
						   // 文件 ID
						  
						})
						item1.rightimg =  url.tempFilePath
						item2.rightimg =  url.tempFilePath
					}
					
					item1.id = data.data[i]._id
					item2.id = data.data[i]._id
					
					console.log(data.data[i].likes)
					await this.getlikes(data,i,item1)
					console.log(data.data[i].comment)
					await this.getcommit(data,i,item2)
					
					
					
					
				}
			
			}
			// tabSelect(e) {
			// 	this.TabCur = e.currentTarget.dataset.id;
			// 	this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			// }
		}
	}
</script>

<style lang="scss">
.chat-custom-right{
	image{
		width: 80rpx;
		height: 80rpx;
	}
}
</style>
