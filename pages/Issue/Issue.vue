<template>
	<view class="content">
		<navigator class="issue_adopt" url="../Issue_adopt/Issue_adopt">
			<image src="../../static/images/issue/bg_2.png"></image>
			<view>发布领养</view>
		</navigator>
		
		<navigator class="issue_findcat" url="../Issue_findcat/Issue_findcat">
			<image src="../../static/images/issue/bg.png"></image>
			<view>发布寻猫</view>
		</navigator>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.content{
	background-color: rgba(230,230,230,0.5);
	width: 100vw;
	height: 100vh;
	navigator{
		text-align: center;
		position: relative;
		image{
			width: 80%;
			// margin: 0 auto;
		}
		view{
			position: absolute;
			font-size: 38px;
			font-family: KaiTi;
			font-weight: bold;
		}
	}
	.issue_adopt{
		view{
			
			top: 60%;
			left: 40%;
			
		}
	}
	.issue_findcat{
		view{
			top: 60%;
			left: 18%;
		}
	}
}
</style>
