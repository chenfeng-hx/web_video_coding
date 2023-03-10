<template>
	<view class="user">
		<view class="top">
			<image src="../../static/images/history.png" mode=""></image>
			<view class="text">浏览历史</view>
		</view>
		<view class="content">
			<view class="row" v-for="item in historyArr">
				<newsBox @click.native="goDetails(item)" :item="item"></newsBox>
			</view>
		</view>
		<view class="noHistory" v-if="!historyArr.length">
			<image src="../../static/images/nohis.png" mode="widthFix"></image>
			<view class="text">暂无浏览记录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listArr: [],
				historyArr: []
			}
		},
		onShow() {
			this.getHistory()
		},
		methods: {
			goDetails(item){
				uni.navigateTo({
					url:`/pages/newsDetail/newsDetail?cid=${item.classid}&id=${item.id}`
				})
			},
			getHistory() {
				let historyArr = uni.getStorageSync("historyArr") || []
				this.historyArr = historyArr
			},
		}
	}
</script>

<style lang="scss" scoped>
	.user {
		.top {
			padding: 50rpx 0;
			background: #f8f8f8;
			color: #666;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image {
				width: 150rpx;
				height: 150rpx;
			}
			.text {
				font-size: 38rpx;
				padding-top: 20rpx;
			}
		}
		.content {
			padding: 30rpx;
			.row {
				border-bottom: 1px dashed #efefef;
				padding-bottom: 20rpx;
			}
		}
		.noHistory {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image {
				width: 450rpx;
			}
			.text {
				font-size: 26rpx;
				color: #888888;
			}
		}
	}
</style>
