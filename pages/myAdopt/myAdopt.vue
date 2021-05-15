<template>
	<view>
		<scroll-view scroll-x class="bg-white nav text-center">
			
			<view 
				class="cu-item" 
				:class="index==TabCur?'text-orange  cur':''" 
				v-for="(item,index) in bar" 
				:key="index" 
				@tap="tabSelect"
				:data-id="index">
				
				{{ item }}
			
			</view>
		</scroll-view>
		<uni-list>
		  <!-- {{ info }} -->
			<uni-list-chat 
				v-for="(item,index) in info"
				:key = "index"
				:title="item.petName" 
				:avatar="item.headImg" 
				
				:note="item.story" 
				
				badge-positon="left" 
				
				>
				 <view class="chat-custom-right">
					 <view class="delete" @click="deleteadopt(index)">删除
						<cl-icon  name="cl-icon-close-border"></cl-icon>
					 </view>
					
					 <cl-select v-model="item.ifadopt == true ? 1 : 2" @confirm="changtype($event,index)" :options="list"></cl-select>
				 </view>
			 </uni-list-chat>
		</uni-list>
		<!-- <cl-button @tap="open">打开</cl-button> -->
		<cl-confirm ref="confirm"> </cl-confirm>
		<cl-confirm ref="confirmdelete"> </cl-confirm>
		<view style="margin-top: 20rpx; text-align: center;">-- 暂无更多 --</view>
		<cl-loading-mask v-if="load" :loading="true" text="拼命加载中">
			
		</cl-loading-mask>
		<cl-toast ref="toast" position="middle"></cl-toast>
	</view>
</template>

<script>
	
	const db = wx.cloud.database()
	const adopt = db.collection('adopt')
	
	
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		data() {
			return {
				bar:[
					'已被领养',
					'未被领养'
				],
				TabCur: 0,
				list:[{
					label: "已被领养",
					value: 1
				},{
					label: "未被领养",
					value: 2
				}],
				val:2,
				info: '',
				id: '',
				itemindex: 0,
				changeindex: '',
				load: true
			}
		},
		onLoad (option) {
			console.log(option)
			this.id = option.id
			
			this.getadopted()
			
		},
		methods: {
			deleteadopt (index) {
				let that = this
				// this.load = true
				console.log(that.info[index]._id)
				this.$refs["confirmdelete"].open({
					title: "提示",
					message: "确定删除该领养",
					callback: ({ action }) => {
						if (action == 'confirm') {
							this.load = true
							adopt.doc(that.info[index]._id).remove({
							  success: function(res) {
								  console.log('delete',res)
								  that.load = false
								  if (that.itemindex == 0) {
									  that.getadopted()
								  } else {
									  that.getnotadopt()
								  }
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
			open() {
				var that = this
				this.$refs["confirm"].open({
					title: "提示",
					message: "确定更改领养状态",
					callback: ({ action }) => {
						if (action == 'confirm') {
							console.log('con')
							console.log(this.info[this.changeindex]._id)
							let type = !this.info[this.changeindex].ifadopt
							adopt.doc(this.info[this.changeindex]._id).update({
							  // data 传入需要局部更新的数据
							  data: {
							    // 表示将 done 字段置为 true
							    ifadopt: type
							  },
							  success: function(res) {
							    console.log(res)
								console.log(type)
								console.log(that)
								that.$refs["toast"].open({
								          message: "更改成功",
								        })
								if (!type) {
									that.getadopted()
									
								} else {
									console.log("no")
									that.getnotadopt()
								}
							  }
							})
							
						} else {
							console.log('can')
						}
						console.log(action);
					}
				});
			},
			changtype (e,index) {
				this.changeindex = index
				console.log(e)
				console.log(this.info[index])
				if (this.info[index].ifadopt == false && e.value == 1 ) {
					this.open()
				} else if (this.info[index].ifadopt == true && e.value ==2) {
					this.open()
				}
				
			},
			async getimg () {
				for (var i=0;i<this.info.length;i++) {
					var url = await wx.cloud.downloadFile({
								  fileID: this.info[i].imgList[0], // 文件 ID
								  
								})
								
					console.log(url.tempFilePath)
					this.info[i].headImg = url.tempFilePath
					
					
				}
				this.load = false
				this.$forceUpdate()
				console.log(this.info)
			},
			async getadopted () {
				this.load = true
				var somedata = await adopt.orderBy('date','desc').where({
				  _openid: this.id,
				  ifadopt: true
				}).get()
				
				this.info = somedata.data
				console.log(somedata)
				this.getimg()
			},
			async getnotadopt () {
				// const id =
				this.load = true
				var someadopt = await adopt.orderBy('date','desc').where({
				  _openid: this.id,
				  ifadopt: false
				}).get()
				this.info = someadopt.data
				console.log(someadopt)
				this.getimg()
				// .get({
				//   success: function(res) {
				//     // res.data 是包含以上定义的两条记录的数组
				//     console.log(res.data)
				// 	this.info = res.data
				// 	this.$forceUpdate()
				// 	console.log(this.info)
				// 	this.getimg()
					
				//   }
				// })
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				console.log(e.currentTarget.dataset.id)
				if (e.currentTarget.dataset.id == 1) {
					this.itemindex = 1
					this.getnotadopt()
					this.val = 2
				} else if (e.currentTarget.dataset.id == 0) {
					this.itemindex = 0
					this.val = 1
					this.getadopted()
				}
			}
		}
	}
</script>

<style scoped lang="scss">
.chat-custom-right{
	display: flex;
	align-items: center;
}
.delete{
	font-size: 29rpx;
	cl-icon{
		margin-left: 10rpx;
	}
	/* padding-left: 10rpx; */
}
</style>
