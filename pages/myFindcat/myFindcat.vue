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
		<view class="finded">
			<uni-list>
			   <!-- <uni-list-item 
					title="列表左侧带略缩图" 
					note="列表描述信息" 
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
					thumb-size="lg" 
					rightText="右侧文字">
				</uni-list-item> -->
				<uni-list-chat 
					v-for="(item,index) in info"
					:key = "index"
					:title="item.petName" 
					:avatar="item.headImg" 
					
					:note="item.story" 
			
					badge-positon="left" 
					
					>
					 <view class="chat-custom-right">
						 <view class="delete"  @click="deleteadopt(index)">删除
						 	<cl-icon  name="cl-icon-close-border"></cl-icon>
						 </view>
						 <!-- <view>asdsd</view> -->
						 <cl-select 
							v-model="item.iffind == true ? 1 : 2" 
							 @confirm="changtype($event,index)"
							:options="list"></cl-select>
						 <!-- <button></button> -->
					 </view>
				 </uni-list-chat>
			    <!-- <uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标" ></uni-list-item> -->
			</uni-list>
		</view>
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
	const findcat = db.collection('findCat')
	
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			uniList,
			uniListItem
		},
		data() {
			return {
				bar:[
					'已找到',
					'未找到'
				],
				TabCur: 0,
				scrollLeft: 0,
				val: 1,
				list:[
					{
						label: "已找到",
						value: 1
					},
					{
						label: "未找到",
						value: 2
					}
				],
				id: '',
				info: '',
				load: true,
				typeindex : 0,
				changeindex: ''
			}
		},
		onLoad (options) {
			console.log(options)
			this.id = options.id
			this.getfinded()
		},
		methods: {
			deleteadopt (index) {
				let that = this
				// this.load = true
				console.log(that.info[index]._id)
				this.$refs["confirmdelete"].open({
					title: "提示",
					message: "确定删除该寻猫",
					callback: ({ action }) => {
						if (action == 'confirm') {
							this.load = true
							findcat.doc(that.info[index]._id).remove({
							  success: function(res) {
								  console.log('delete',res)
								  that.load = false
								  if (that.typeindex == 0) {
									  that.getfinded()()
								  } else {
									  that.getnotfind()()
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
					message: "确定更改寻猫状态",
					callback: ({ action }) => {
						if (action == 'confirm') {
							console.log('con')
							console.log(this.info[this.changeindex]._id)
							let type = !this.info[this.changeindex].iffind
							findcat.doc(this.info[this.changeindex]._id).update({
							  // data 传入需要局部更新的数据
							  data: {
							    // 表示将 done 字段置为 true
							    iffind: type
							  },
							  success: function(res) {
							    console.log(res)
								console.log(type)
								console.log(that)
								that.$refs["toast"].open({
								          message: "更改成功",
								        })
								if (!type) {
									that.getfinded()()
									
								} else {
									console.log("no")
									that.getnotfind()()
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
				if (this.info[index].iffind == false && e.value == 1 ) {
					this.open()
				} else if (this.info[index].iffind == true && e.value ==2) {
					this.open()
				}
				
			},
			async getfinded () {
				this.load = true
				var findedcat = await findcat.orderBy('date','desc').where({
				  _openid: this.id,
				  iffind: true
				}).get()
				this.info = findedcat.data
				console.log(findedcat)
				this.getimg()
			},
			async getnotfind () {
				this.load = true
				var findnotcat = await findcat.orderBy('date','desc').where({
				  _openid: this.id,
				  iffind: false
				}).get()
				
				this.info = findnotcat.data
				this.getimg()
				console.log(findnotcat)
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
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
				console.log(e.currentTarget.dataset.id)
				if (e.currentTarget.dataset.id === 0) {
					this.typeindex = 0
					this.getfinded()
				} else {
					this.typeindex = 1
					this.getnotfind()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
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
