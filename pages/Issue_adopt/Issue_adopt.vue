<template>
	<view class="body">
		<view class="addImg"  >
			<robby-image-upload @add="updateImg" limit="6" :value="imageData"></robby-image-upload>
			<view class="addimgtext">添加图片</view>
			<view class="addimgnode"><text class="cuIcon-info"></text>最多只能添加6张图片</view>
		</view>
		<view class="catform">
			<cl-filter-bar @change="onChange">
				
					<!-- 单选下拉 -->
					<cl-filter-item
						v-model="cattype"
						label="猫咪品种"
						:options="catlist"
						type="dropdown"
						prop="rank"
					></cl-filter-item>
			
					
				</cl-filter-bar>
			 <view class="uni-common-mt">
				<v-form 
					ref = "cat"
					@submit="handleSubmit" 
					:formDefinition="formDefinition" 
					:data="catInfo" />
				
			</view>
		</view>
		<view class="peopelInfo">
			<view class="uni-common-mt">
				<v-form 
					ref = "people"
					@submit="handleSubmit" 
					:formDefinition="formPeople" 
					:data="peopleInfo" />
			</view>
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
			<!-- <view class="cityTitle">选择所在城市</view>
			<view class="citySelect" >
				<cl-select-region class="citySelect" v-model="citydata"></cl-select-region>
			</view>
			<cl-select-region ></cl-select-region> -->
			<view class="cityTitle">详细地址</view>
			<view class="citySelect">
				<cl-textarea class="citySelect" v-model="detailLocation" placeholder="请输入详细地址"></cl-textarea>
			</view>
			<!-- <cl-textarea class="citySelect" v-model="detailLocation" placeholder="请输入详细地址"></cl-textarea> -->
		</view>
		<view class="pushBox">
			<button class="push" @click="pushadopt">发布</button>
		</view>
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
	const adopt = db.collection('adopt')
	import randomName from '../../static/randomName.js'
	import areaData from '../../static/area-data-min.js'
	import LbPicker from '@/components/lb-picker'
	import VForm from '@/components/venus-form/v-form.vue'
	import catdata from '../../static/cat.js'
	import robbyImageUpload from '@/components/robby-image-upload/robby-image-upload.vue'
	export default {
		data() {
			return {
				value2: '',
				peopleInfo: {
					peoplename: '',
					peoplephone: '',
					peoplewechat: '',
					disphone:false,
				},
				cattype: "",
				ifloading: false,
				loadingText: "",
				label2: '选择所在城市',
				list1: areaData,
				imageData: [],
				catlist: '',
				citydata: '',
				detailLocation:'',
				tmpimgdata: [],
				formDefinition: {
					fields: [
						{
							label: '昵称', // 表单显示名称
							name: 'name', // 每个表单项的唯一标识(不能重复)
							type: 'input', // 表单项的类型 这里是输入框
							inputType: 'text', // 输入框的类型,有 text number digit textarea
							password: false, // 是否为密码输入框
							placeholder: '宠物昵称(限5个字)', // 提示信息
							disabled: false, // 是否禁用
							maxLength: 5 // 最大输入长度
						},
						{
							label: '年龄', // 表单显示名称
							name: 'age', // 每个表单项的唯一标识(不能重复)
							type: 'input', // 表单项的类型 这里是输入框
							inputType: 'number', // 输入框的类型,有 text number digit textarea
							password: false, // 是否为密码输入框
							placeholder: '请填写猫咪年龄', // 提示信息
							disabled: false, // 是否禁用
							maxLength: 10 // 最大输入长度
						},
						{
						    label: '性别',
						    name: 'sex',
						    type: 'radio', // 表单项的类型 这里是单选类型
						    options: [
						        {
						            label: '女孩', // 展示的名称
						            value: 1 // 表单提交的值
						        },
						        {
						            label: '男孩',
						            value: 2
						        }
						    ]
						},
						{
						    label: '是否免费',
						    name: 'cost',
						    type: 'radio', // 表单项的类型 这里是单选类型
						    options: [
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
						},
						{
						    label: '是否注射疫苗',
						    name: 'vaccine',
						    type: 'switch' // 表单项的类型 这里是开关类型
						},
						{
						    label: '是否绝育',
						    name: 'sterilization',
						    type: 'switch' // 表单项的类型 这里是开关类型
						},
						{
						    label: '是否驱虫',
							
						    name: 'expellingParasite',
						    type: 'switch' // 表单项的类型 这里是开关类型
						},
						 {
							label: 'TA的故事', // 表单显示名称
							name: 'sorry', // 每个表单项的唯一标识(不能重复)
							type: 'input', // 表单项的类型 这里是输入框
							inputType: 'textarea',
							password: false,
							placeholder: '请输入宠物描述、送养原因...',
							disabled: false,
							maxLength: -1
						},
						{
						    label: '领养条件',
						    name: 'condition',
						    type: 'checkbox', // 表单项的类型 这里是多选框类型
						    options: [
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
						    ]
						}],
						showSubmitBtn: false, // 是否显示提交按钮
						showResetBtn: false   // 是否显示重置按钮
				},
				// 这里传入的是数据,注意,这些数据都是双向绑定的,也就是说,表单中的任何操作都会及时的映射到这个对象
				// 如果要实现监控某些数据变化而进行一些操作,可以使用 vue 中的 watch,同时也可以配合computed完成
				// 各种各样的实时效果
				catInfo: {
					name: '', // 注意:这里的对象key要跟表单定义对象中的name属性值一一对应
					age: '',
					sex: 1,
					cost: 1,
					vaccine: false,
					sterilization: false,
					expellingParasite:false,
					sorry:'',
					condition:[]
				},
				formPeople:{
					fields:[
						{
							label: '姓名', // 表单显示名称
							name: 'peoplename', // 每个表单项的唯一标识(不能重复)
							type: 'input', // 表单项的类型 这里是输入框
							inputType: 'text', // 输入框的类型,有 text number digit textarea
							password: false, // 是否为密码输入框
							placeholder: '请输入您的姓名', // 提示信息
							disabled: false, // 是否禁用
							maxLength: 5 // 最大输入长度
						},
						{
							label: '手机号', // 表单显示名称
							name: 'peoplephone', // 每个表单项的唯一标识(不能重复)
							type: 'input', // 表单项的类型 这里是输入框
							inputType: 'number', // 输入框的类型,有 text number digit textarea
							password: false, // 是否为密码输入框
							placeholder: '请输入您的手机号', // 提示信息
							disabled: false, // 是否禁用
							maxLength: 11 // 最大输入长度
						},
						{
							label: '微信', // 表单显示名称
							name: 'peoplewechat', // 每个表单项的唯一标识(不能重复)
							type: 'input', // 表单项的类型 这里是输入框
							inputType: 'text', // 输入框的类型,有 text number digit textarea
							password: false, // 是否为密码输入框
							placeholder: '请输入您的微信', // 提示信息
							disabled: false, // 是否禁用
							maxLength: -1 // 最大输入长度
						},
						{
						    label: '是否显示电话号码',
							
						    name: 'disphone',
						    type: 'switch' // 表单项的类型 这里是开关类型
						}
					]
				}
			}
		},
		components: {
			robbyImageUpload,
			VForm,
			LbPicker
		
		},
		mounted() {
			this.catlist = catdata.splice(1)
		},
		methods: {
			onChange() {
				
			},
			pushadopt () {
				var cat = this.$refs.cat.data
				var master = this.$refs.people.data
				console.log("img",this.tmpimgdata)
				console.log("type",this.cattype)
				console.log("cat",this.$refs.cat.data)
				console.log("people",this.$refs.people.data)
				console.log(this.value2)
				console.log(this.detailLocation)
				// console.log("people",this.$refs[people].data)
				
				// 没有上传图片
				if (this.tmpimgdata.length==0) {
					
					this.$refs["toast"].open({
						type: "warning",
						message: "请上传猫咪图片",
						position: "middle",
						icon:"warning",
						// duration: 100000
						// type: 'warning'
					})
				} else if (this.cattype == "") {
					// 没有猫咪种类
					this.$refs["toast"].open({
						type: "warning",
						message: "请选择猫咪种类",
						position: "middle",
						icon:"warning",
					
					})
				} else if (cat.name == "" || cat.age == "" || cat.sorry == "") {
					// 没有猫咪信息
					this.$refs["toast"].open({
						type: "warning",
						message: "请填写猫咪的信息",
						position: "middle",
						icon:"warning",
						
					})
					
				} else if (this.detailLocation = "" || this.value2 == undefined || this.value2 == "") {
					// 没有位置
					this.$refs["toast"].open({
						type: "warning",
						message: "请填写位置信息",
						position: "middle",
						icon:"warning",
						
					})
				} else if (master.peoplename == "" || master.peoplephone == "" || master.peoplewechat == "") {
					// 没有送养人信息
					this.$refs["toast"].open({
						type: "warning",
						message: "请填写送养人信息",
						position: "middle",
						icon:"warning",
						
					})
				} else {
					this.ifloading = true
					this.loadingText = "发布中"
					adopt.add({
						data:{
							cost: cat.cost,
							viewed: 0,
							imgList:this.tmpimgdata,
							date: new Date(),
							adoptLocation: this.value2,
							adoptdetailLocation: this.detailLocation,
							// lostDate: this.lostdate,
							// lostTime: this.losttime,
							masterName: master.peoplename,
							masterPhone: master.peoplephone,
							masterWechat: master.peoplewechat,
							disphone: master.disphone,
							petName: cat.name,
							petAge: cat.age,
							petType: this.cattype,
							sterilization :cat.sterilization,
							vaccine: cat.vaccine,
							expellingParasite: cat.expellingParasite,
							condition: cat.condition,
							petSex: cat.sex,
							story: cat.sorry,
							ifadopt: false
						},
						success: res => {
							this.ifloading = false
							
							this.$refs["toast"].open({
								type: "success",
								message: "发布成功",
								position: "middle",
								icon:"success",
								
							})
							uni.reLaunch({
								url: '../Adopt/Adopt'
							})
							
							
						},
						fail: err => {
							this.ifloading = false
							this.$refs["toast"].open({
								type: "error",
								message: "发布失败",
								position: "middle",
								icon:"error",
								
							})
							console.log(err)
						}
					})
				}
			},
			updateImg(data) {
				// console.log('/findCat/'+randomName()+'.png')
				// var tmpimgdata = []
				this.ifloading = true
				this.loadingText = "上传图片中..."
				console.log(data.currentImages.length)
				for (var i=0;i<data.currentImages.length;i++) {
					console.log(i)
					if (i == data.currentImages.length-1) {
						wx.cloud.uploadFile({
						  cloudPath: 'adopt/'+randomName()+'.png', // 上传至云端的路径
						  filePath: data.currentImages[i], // 小程序临时文件路径
						 
						})
						.then(res => {
							
							this.tmpimgdata.push(res.fileID)
							this.ifloading = false
							
						})
					} else {
						wx.cloud.uploadFile({
						  cloudPath: 'findCat/'+randomName()+'.png', // 上传至云端的路径
						  filePath: data.currentImages[i], // 小程序临时文件路径
						 
						})
						.then(res => {
							this.tmpimgdata.push(res.fileID)
						})
					}
					
				}
				// this.ifloading = true
				
				// this.imgs = data.allImages
				
				
			},
			sexChange(e) {
				// console.log( e.detail.value)
				this.sexindex = e.detail.value
			},
			 handleSubmit(data) {
			                console.log(data);
			            },
			handleTap (picker) {
			  this.$refs[picker].show()
			},
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
			  }
			},
			handleCancel (e) {
			  console.log('cancel::', e)
			},
						// showPicker() {
						// 	console.log(this.$refs.mpvuePicker)
						//       this.$refs.mpvuePicker.show();
						//     },
						//     onConfirm(e) {
						//       console.log(e);
						//     },
						//     onChange(e) {
						//       console.log(e);
						//     },
						//     onCancel(e) {
						//       console.log(e);}
		}
	}
</script>

<style scoped lang="scss">
.body{
	background-color: rgba(230,230,230,0.5);
	.addImg{
		margin-bottom: 20rpx;
		background-color: #fff;
		padding-bottom: 20rpx;
		.addimgtext{
			padding-left: 20rpx;
			font-size: 43rpx;
			margin-bottom: 10rpx;
		}
		.addimgnode{
			padding-left: 20rpx;
			font-size: 25rpx;
			color: $system-color;
			// margin-bottom: 20rpx;
		}
	}
	.catform{
		background-color: #fff;
		padding: 0 20rpx;
		margin-bottom: 20rpx;
	}
	.peopelInfo{
		background-color: #fff;
		// padding: 0 20rpx;
		padding-bottom: 20rpx;
		margin-bottom: 20rpx;
		.location{
			padding-left: 28rpx;
			margin-bottom: 20rpx;
		}
		.cityTitle{
			padding-left: 28rpx;
			margin-bottom: 8rpx;
		}
		.citySelect{
			width: 97%;
			margin: 10rpx auto;
			// margin:10rpx 0;
		}
	}
	.pushBox{
		// margin-bottom: 30rpx;
		// margin: 30rpx 0;
		// height: 200rpx;
		
		width: 100vw;
		display: flex;
		// padding: 25rpx 0;
		padding-top: 25rpx;
		padding-bottom: 50rpx;
		// align-items: center;
		justify-content: center;
		background-color: #fff;
		button{
			width: 80%;
			background-color: $system-color;
			color: #fff;
			// margin: 20rpx 0;
		}
	}
}
</style>
