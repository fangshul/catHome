<template>
	<view class="compon">
		<view class="location"  @tap="handleTap('picker2')">
			<text class="cuIcon-location locationIcon" style=""></text>
			{{ label2 }}
		</view>
		
		<lb-picker ref="picker2"
		  v-model="value2"
		  mode="multiSelector"
		  :list="list1"
		  :level="2"
		  :dataset="{ name: 'label2' }"
		  @change="handleChange"
		  @confirm="handleConfirm"
		  @cancel="handleCancel">
		</lb-picker>
		<!-- <cl-tabs></cl-tabs> -->
		
		
		<cl-filter-bar @change="onChange">
				<!-- 多选下拉 -->
				<cl-filter-item
					v-model="arr"
					label="猫咪信息"
					:options="infolist"
					type="dropdown"
					multiple
					prop="rank"
					v-if="ifinfo"
				></cl-filter-item>
		
				<!-- 单选下拉 -->
				<cl-filter-item
					v-model="str"
					label="猫咪品种"
					:options="catlist"
					type="dropdown"
					prop="type"
				></cl-filter-item>
		
				<cl-filter-item
					v-model="sex"
					label="猫咪性别"
					:options="catsex"
					type="dropdown"
					prop="sex"
				></cl-filter-item>
				
			</cl-filter-bar>
		
	</view>
</template>

<script>
	
	import areaData from '../../static/area-data-min.js'
	import catdata from '../../static/cat.js'
	import LbPicker from '@/components/lb-picker'
	export default {
		name:"selector",
		components: {
		   LbPicker,
		   // clFilterBar
		},
		props: {
			
			ifinfo:{
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				list1: areaData,
				value2: ['340000', '340800'],
				label2: '',
				province: '广东',
				city:'汕头',
				
				catlist: catdata,
				catsex:[
					{
						label: "母猫",
						value: 1
					},
					{
						label: "公猫",
						value: 2
					}
				],
				infolist:[
					{
						
						label: "已绝育",
						value: 1
					},
					{
						
						label: "已驱虫",
						value: 2
					},
					{
						
						label: "已免疫",
						value: 3
					}
				],
				list: [
					{
						label: "综合排序",
						value: 1
					},
					{
						label: "距离最近",
						value: 2
					},
					{
						label: "好评优先",
						value: 3
					},
					{
						label: "起送价最低",
						value: 4
					},
					{
						label: "配送最快",
						value: 5
					},
					{
						label: "通用排序",
						value: 6
					}
				],
				arr: [1],
				str: "",
				sex: "",
				sort: "desc"
				
			};
		},
		mounted() {
			this.province = uni.getStorageSync('province')
				this.city = uni.getStorageSync('city')
			// console.log(uni.getStorageSync('city'))
			// console.log(uni.getStorageSync('province'))
			// uni.getStorageSync('city')
			// uni.getStorageSync('province')
			console.log(this.ifinfo)
			for(var i=0;i<areaData.length;i++) {
				if(areaData[i].label.indexOf(this.province)>-1) {
					// console.log(areaData[i].label)
					this.value2[0] = areaData[i].value
					for (var j=0;j<areaData[i].children.length;j++) {
						if (areaData[i].children[j].label.indexOf(this.city)>-1) {
							// console.log(areaData[i].children[j].label)
							this.value2[1] = areaData[i].children[j].value 
						}
					}
				}
				
			}
			
			uni.setStorageSync('location',this.value2)
			const info1 = this.$refs.picker2.getColumnsInfo(this.value2)
			// const info2 = this.$refs.picker4.getColumnsInfo(this.value5)
			console.log('根据value获取的信息：', info1)
			// console.log('根据value获取的信息：', info2)
			this.label2 = info1.item.map(m => m.label).join('-')
			// this.label5 = info2.item.map(m => m.label).join('-')
		},
		methods:{
			handleChange (e) {
			  console.log('change::', e)
			},
			handleConfirm (e) {
			  // 如果存在多个picker，可以在picker上设置dataset属性，confirm中获取，就能区分是哪个picker了
			  console.log('confirm::', e)
			  if (e) {
			    const name = e.dataset.name
			    const label = e.item.map(m => m.label).join('-')
			    if (name && label) {
			      this[name] = label
			    }
				this.$emit('changlocation',e.value)
			  }
			},
			handleCancel (e) {
			  console.log('cancel::', e)
			},
			handleTap (picker) {
			  this.$refs[picker].show()
			  
			},
			onChange(e) {
				console.log(e)
				this.$emit("changcatinfo",e)
			}
		}
	}
</script>

<style scoped lang="scss">
.compon{
	padding-top: 20rpx;
	.location{
		// background-color: $system-color;
		background-color: #fff;
		// width: 300rpx;
		width: 100vw;
		min-height: 80rpx;
		// border-radius: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #727272;
		// color: #fff;
		font-size: 30rpx;
		margin-bottom: 30rpx;
		// margin: 30rpx 0;
		// padding: 20rpx;
		// letter-spacing: 1px;
		.locationIcon{
			margin-right: 6rpx;
			font-size: 40rpx;
		}
	}
	
}
</style>
