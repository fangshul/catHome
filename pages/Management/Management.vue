<template>
	<view>
		<y-Fab :bottom="140" :right="40" @click="showDrawer" />
		<!-- <button @click="showDrawer" type="primary">右侧弹出 显示Drawer</button> -->
		<uni-drawer ref="showRight" mode="right" :mask-click="false">
			<scroll-view style="height: 100%;" scroll-y="true">
				<!-- <button @click="closeDrawer" type="primary">关闭Drawer</button> -->
				<view @click="closeDrawer" class="closenav">关闭Drawer</view>
				<view class="navItem" @click="changeitem(index)" v-for="(item,index) in nav" :key="item">{{ item }}</view>
			</scroll-view>
		</uni-drawer>
		<view v-if="ifuser" class="user">
			<cl-search 
				v-model="searchuser" 
				placeholder="搜索用户昵称" 
				@search="onSearch"></cl-search>
			<uni-table border stripe emptyText="暂无更多数据" >
			    <!-- 表头行 -->
			    <uni-tr>
					 <uni-th align="center">昵称</uni-th>
			        <uni-th align="center">id</uni-th>
			        <uni-th align="center">openid</uni-th>
			      
					<uni-th align="center">
						<view>删除</view>
					</uni-th>
			    </uni-tr>
			    <!-- 表格数据行 -->
			    <uni-tr v-for="(item,index) in users" 
					:key= "index">
					<uni-td>{{item.name}}</uni-td>
			        <uni-td>{{item._id}}</uni-td>
			        <uni-td>{{ item._openid }}</uni-td>
			        
					<uni-td><view @click="deleteuser(index)">删除</view></uni-td>
			    </uni-tr>
			   
			
			</uni-table>
			
		</view>
		<view v-if="ifadopt">
			<cl-search
				v-model="searchadopt" 
				placeholder="搜索猫咪昵称" 
				@search="onSearchadopt"></cl-search>
			<uni-table border stripe emptyText="暂无更多数据" >
			    <!-- 表头行 -->
			    <uni-tr>
					 <uni-th align="center">猫咪昵称</uni-th>
			        <uni-th align="center">猫咪年龄</uni-th>
					<uni-th align="center">猫咪故事</uni-th>
					<uni-th align="center">主人昵称</uni-th>
					<uni-th align="center">主人手机号码</uni-th>
					<uni-th align="center">主人微信</uni-th>
			        <uni-th align="center">openid</uni-th>
					<uni-th align="center">id</uni-th>
			      
					<uni-th align="center">
						<view>删除</view>
					</uni-th>
			    </uni-tr>
			    <!-- 表格数据行 -->
			    <uni-tr v-for="(item,index) in adopts" 
					:key= "index">
					<uni-td>{{item.petName}}</uni-td>
			        <uni-td>{{item.petAge}}</uni-td>
			        <uni-td>{{ item.story }}</uni-td>
			        <uni-td>{{ item.masterName }}</uni-td>
					<uni-td>{{ item.masterPhone }}</uni-td>
					<uni-td>{{ item.masterWechat }}</uni-td>
					<uni-td>{{ item._openid }}</uni-td>
					<uni-td>{{item._id}}</uni-td>
					<uni-td><view @click="deleteadopt(index)">删除</view></uni-td>
			    </uni-tr>
			   
			
			</uni-table>
		</view>
		<view v-if="iffindcat">
			<cl-search
				v-model="searchadopt" 
				placeholder="搜索猫咪昵称" 
				@search="onSearchfindcat"></cl-search>
			<uni-table border stripe emptyText="暂无更多数据" >
			    <!-- 表头行 -->
			    <uni-tr>
					 <uni-th align="center">猫咪昵称</uni-th>
			        <uni-th align="center">猫咪年龄</uni-th>
					<uni-th align="center">猫咪故事</uni-th>
					<uni-th align="center">主人昵称</uni-th>
					<uni-th align="center">主人手机号码</uni-th>
					<uni-th align="center">主人微信</uni-th>
			        <uni-th align="center">openid</uni-th>
					<uni-th align="center">id</uni-th>
			      
					<uni-th align="center">
						<view>删除</view>
					</uni-th>
			    </uni-tr>
			    <!-- 表格数据行 -->
			    <uni-tr v-for="(item,index) in findcats" 
					:key= "index">
					<uni-td>{{item.petName}}</uni-td>
			        <uni-td>{{item.petAge}}</uni-td>
			        <uni-td>{{ item.story }}</uni-td>
			        <uni-td>{{ item.masterName }}</uni-td>
					<uni-td>{{ item.masterPhone }}</uni-td>
					<uni-td>{{ item.masterWechat }}</uni-td>
					<uni-td>{{ item._openid }}</uni-td>
					<uni-td>{{item._id}}</uni-td>
					<uni-td><view @click="deletefindcat(index)">删除</view></uni-td>
			    </uni-tr>
			   
			
			</uni-table>
		</view>
		<view v-if="ifforum">
			<cl-search
				v-model="searchforum" 
				placeholder="搜索论坛内容" 
				@search="onSearchforum"></cl-search>
			<uni-table border stripe emptyText="暂无更多数据" >
			    <!-- 表头行 -->
			    <uni-tr>
				
					<uni-th align="center">内容</uni-th>
					<uni-th align="center">点赞数量</uni-th>
			        <uni-th align="center">openid</uni-th>
					<uni-th align="center">id</uni-th>
			      
					<uni-th align="center">
						<view>删除</view>
					</uni-th>
			    </uni-tr>
			    <!-- 表格数据行 -->
			    <uni-tr v-for="(item,index) in forums" 
					:key= "index">
					
					<uni-td>{{ item.content }}</uni-td>
					<uni-td>{{ item.like }}</uni-td>
					<uni-td>{{ item._openid }}</uni-td>
					<uni-td>{{item._id}}</uni-td>
					<uni-td><view @click="deleteforum(index)">删除</view></uni-td>
			    </uni-tr>
			   
			
			</uni-table>
		</view>
		<view v-if="ifchart"
		>
			<view style="margin: 30rpx;">近五日各模块的发布量</view>
			<view class="charts-box">
			  <qiun-data-charts
				type="line"
				:chartData="chartData"
				background="none"
			  />
			</view>
		</view>
	</view>
</template>

<script>
	const db = wx.cloud.database()
	import uniDrawer from '../../components/uni-drawer/uni-drawer.vue'
	
	export default {
		components: {uniDrawer},
		data() {
			return {
				chartData:{
				    "categories": [
				      
				    ],
				    "series": [
				        {
				            "name": "领养",
				            "data": [
				               
				            ]
				        },
				        {
				            "name": "寻猫",
				            "data": [
				               
				            ]
				        },
				        {
				            "name": "论坛",
				            "data": [
				               
				            ]
				        }
				    ]
				},
				nav :[
					'管理用户',
					'管理领养',
					'管理寻猫',
					'管理论坛',
					'数据统计'
				],
				users: [],
				searchuser:'',
				ifuser: true,
				ifadopt: false,
				iffindcat: false,
				ifforum: false,
				ifchart: false,
				adopts: [],
				searchadopt:'',
				findcats: [],
				forums: '',
				searchforum:''
			}
		},
		onShow() {
			var that = this
			this.getuser()
			this.getchartdata()
			console.log(this.getDay(0))
			console.log(this.getDay(-1))
			console.log(this.getDay(-2))
			
		},
		methods: {
			async getchartdata () {
				for (var i=0; i<5; i++) {
					this.chartData.categories[i] = this.getDay(0-i)
					
					var today = new Date();
					var targetday_milliseconds=today.getTime() + 1000*60*60*24*(0-i);
					today.setTime(targetday_milliseconds);
					 // this.getadoptnum(today)
					// console.log(this.getadoptnum(today))
					let ado = await this.getadoptnum(today)
					console.log('abo',ado)
					this.chartData.series[0].data[i] = ado 
					
					let cat = await this.getfindcatnum(today)
					this.chartData.series[1].data[i] = cat 
					
					let foru = await this.getforum(today)
					this.chartData.series[2].data[i] = foru 
					// this.getforum(today).then(res=> {
					// 	that.chartData.series[2].data[i] = res
					// })
					
					// this.chartData.series[0].data[i] = this.getadoptnum(today)
					// this.chartData.series[1].data[i] = this.getfindcatnum(today)
					// this.chartData.series[2].data[i] = this.getforum(today)
				}
			},
			async getadoptnum (date) {
				// console.log(date)
				let adopt  = await db.collection('adopt').where({
					date: date
				}).get()
				console.log('adot',adopt)
				return adopt.data.length
			},
			async getfindcatnum (date) {
				let findcat  = await db.collection('findCat').where({
					date: date
				}).get()
				return findcat.data.length
			},
			async getforum (date) {
				let forum  = await db.collection('forum').where({
					date: date
				}).get()
				return forum.data.length
			},
			getDay(day){
			    var today = new Date();
			    var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
			    today.setTime(targetday_milliseconds); //注意，这行是关键代码
			    var tYear = today.getFullYear();
			    var tMonth = today.getMonth();
			    var tDate = today.getDate();
			    tMonth = this.doHandleMonth(tMonth + 1);
			    tDate = this.doHandleMonth(tDate);
			    // return tYear+"-"+tMonth+"-"+tDate;
				return tMonth+"-"+tDate;
			},
			doHandleMonth(month){
			    var m = month;
			    if(month.toString().length == 1){
			     m = "0" + month;
			    }
			    return m;
			},
			changeitem(index) {
				if (index == 0) {
					this.ifuser = true
					this.getuser()
					this.ifchart = this.ifadopt = this.iffindcat = this.ifforum = false
				} else if (index == 1) {
					this.ifadopt = true
					this.getadopt()
					this.ifchart = this.ifuser = this.iffindcat = this.ifforum = false
				} else if (index == 2) {
					this.iffindcat = true
					this.getfindcat()
					this.ifchart = this.ifuser = this.ifadopt = this.ifforum = false
				} else if (index == 3) {
					this.ifforum = true
					this.getforum()
					this.ifchart = this.ifuser = this.ifadopt = this.iffindcat = false
				} else if (index == 4) {
					this.ifchart = true
					this.ifforum = this.ifuser = this.ifadopt = this.iffindcat = false
				}
				
			},
			async getforum (){
				let forum  = await db.collection('forum').get()
				console.log(forum)
				this.forums = forum.data
			},
			async getfindcat () {
				let findcat  = await db.collection('findCat').get()
				console.log(findcat)
				this.findcats = findcat.data
			},
			async getadopt () {
				let adopt  = await db.collection('adopt').get()
				console.log(adopt)
				this.adopts = adopt.data
			},
			async onSearchforum() {
				let forum
				if (this.searchforum == '') {
					forum  = await db.collection('forum').get()
					
				} else {
					forum  = await db.collection('forum').where({
						content: this.searchforum
					}).get()
				}
				this.forums = forum.data
			},
			async onSearchfindcat () {
				let findcat
				if (this.searchadopt == '') {
					findcat  = await db.collection('findCat').get()
					
				} else {
					findcat  = await db.collection('findCat').where({
						petName: this.searchadopt
					}).get()
				}
				this.findcats = findcat.data
			},
			async onSearchadopt() {
				let adopt
				if (this.searchadopt == '') {
					adopt  = await db.collection('adopt').get()
					
				} else {
					adopt  = await db.collection('adopt').where({
						petName: this.searchadopt
					}).get()
				}
				this.adopts = adopt.data
			},
			async onSearch () {
				console.log(this.searchuser)
				if (this.searchuser == '') {
					let user  = await db.collection('user').get()
					
				} else {
					let user  = await db.collection('user').where({
						name: this.searchuser
					}).get()
				}
				
				// this.searchuser = ''
				this.users = user.data
			},
			deleteuser (data) {
				console.log(data)
			},
			async getuser () {
				let user  = await db.collection('user').get()
				console.log(user)
				this.users = user.data
			},
			  showDrawer() {
					this.$refs.showRight.open();
				},
				closeDrawer() {
					this.$refs.showRight.close();
				}
		}
	}
</script>

<style scoped>
.navItem,.closenav{
	height: 80rpx;
	border-bottom: 1px solid #ccc;
	line-height: 80rpx;
	/* margin-bottom: 1px solid #A9A9A9; */
}
	
.closenav{
	text-align: center;
}
.navItem{
	padding-left: 25rpx;
}
/* .closenav{
	border-bottom: 1px solid #A9A9A9;;
} */
/* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
.charts-box{
  width: 100%;
  height:300px;
}
</style>
