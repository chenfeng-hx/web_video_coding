<template>
	<view class="detail">
		<view class="title">{{detail.title}}</view>
		<view class="info">
			<view class="author">
				编辑:{{detail.author}}
			</view>
			<view class="time">
				发布日期:{{detail.posttime}}
			</view>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
		<view class="description">
			声明:如有侵权，请联系123456@qq.com 管理员进行删除！
		</view>
	</view>
</template>

<script>
	import {parseTime} from "@/utils/tool.js"
	export default {
		data() {
			return {
				options: null,
				detail: {}
			};
		},
		onLoad(query) {
			this.options = query
			this.getDetail()
		},
		methods: {
			getDetail() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/detail.php",
					data: this.options,
					success: res => {
						// 对数据的修改都放在赋值数据之前
						res.data.posttime = parseTime(res.data.posttime)
						res.data.content = res.data.content.replace(/<img/gi, '<img style="max-width: 100%"')
						this.detail = res.data
						
						// 个人中心浏览历史
						this.saveHistory()
						
						// 修改当前详情页的标题
						uni.setNavigationBarTitle({
							title: this.detail.title
						})
					}
				})
			},
			saveHistory(){
				
				let historyArr=uni.getStorageSync("historyArr") || []
				let item={
					id:this.detail.id,
					classid:this.detail.classid,
					picurl:this.detail.picurl,
					title:this.detail.title,
					looktime:parseTime(Date.now())
				}
				
				let index=historyArr.findIndex(i=>{
					return i.id==this.detail.id
				})
				
				if(index>=0){
					historyArr.splice(index,1)
				}
								
				historyArr.unshift(item)	
				historyArr=historyArr.slice(0,10)		
				uni.setStorageSync("historyArr",historyArr)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		padding: 30rpx;
		.title {
			font-size: 46rpx;
			color: #333;
		}
		.info {
			background: #f6f6f6;
			padding: 20rpx;
			font-size: 25rpx;
			color: #666;
			display: flex;
			justify-content: space-between;
			margin: 40rpx 0;
		}
		.content {
			padding-bottom: 50rpx;
		}
		.description {
			background: #fef0f0;
			font-size: 26rpx;
			padding: 20rpx;
			color: #f89898;
			line-height: 1.8em;
		}
	}
</style>
