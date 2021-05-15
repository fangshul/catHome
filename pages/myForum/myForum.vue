<template>
	<view>
		<uni-list>
		  
			<uni-list-chat 
				v-for="(item,index) in listdata"
				:key = "index"
				:title="item.content" 
				:avatar="item.headImg" 
				
				:note="item.date.getMonth()+1 + ' - ' + item.date.getDate()" 
				
				badge-positon="left" 
				
				>
				 <view class="chat-custom-right">
					 <view class="delete" @click="deleteitem(index)">删除
						<cl-icon  name="cl-icon-close-border"></cl-icon>
					 </view>
					 <!-- <cl-select v-model="val" :options="list"></cl-select> -->
				 </view>
			 </uni-list-chat>
		</uni-list>
		<view style="margin-top: 20rpx; text-align: center;">-- 暂无更多 --</view>
		<cl-confirm ref="confirmdelete"> </cl-confirm>
		<cl-loading-mask v-if="load" :loading="true" text="拼命加载中">
			
		</cl-loading-mask>
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
				listdata: '',
				forumid : '',
				load:true
				// list:[{
				// 	label: "已被领养",
				// 	value: 1
				// },{
				// 	label: "未被领养",
				// 	value: 2
				// }],
				// val:1
			}
		},
		onLoad(options) {
			console.log(options)
			this.forumid = options.id
			this.getdata()
			// forum.doc(options.id)
		},
		methods: {
			deleteitem(index) {
				
				var that = this
				this.$refs["confirmdelete"].open({
					title: "提示",
					message: "确定删除该讨论",
					callback: ({ action }) => {
						if (action == 'confirm') {
							this.load = true
							forum.doc(that.listdata[index]._id).remove({
							  success: function(res) {
								  console.log('delete',res)
								  that.load = false
								  that.getdata()
								  // if (that.typeindex == 0) {
									 //  that.getfinded()()
								  // } else {
									 //  that.getnotfind()()
								  // }
								// console.log('delete',res)
							  }
							})
						} else {
							console.log('can')
						}
						console.log(action);
					}
				});
			},
			getdata () {
				this.load = true
				forum.where({
					_openid: this.forumid
				}).get({
					success:res => {
						console.log(res)
						this.listdata = res.data
						this.getimg()
					},
					fail: err => {
						console.log(err)
					}
				})
			},
			async getimg () {
				for (var i=0;i<this.listdata.length;i++) {
					var url = await wx.cloud.downloadFile({
								  fileID: this.listdata[i].imgList[0], // 文件 ID
								  
								})
								
					console.log(url.tempFilePath)
					this.listdata[i].headImg = url.tempFilePath
					
					
				}
				this.load = false
				this.$forceUpdate()
				// console.log(this.info)
			}
		}
	}
</script>

<style scoped lang="scss">
.delete{
	font-size: 29rpx;
	cl-icon{
		margin-left: 10rpx;
	}
	/* padding-left: 10rpx; */
}
</style>
