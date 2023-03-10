<template>
	<view class="outer">
		<scroll-view scroll-x="true" class="navscroll">
			<view class="item" :class="clickNum === index ? 'active' : ''" v-for="(item, index) in navData" :key="item.id" @click="clickGetNum(index, item.id)">{{item.classname}}</view>
		</scroll-view>
		<view class="content">
			<div class="row" v-for="item in news" :key="item.id">
				<newsBox @click.native="goDetails(item)" :item="item"></newsBox>
			</div>
		</view>
		<view class="nodata" v-if="!news.length">
			<image src="../../static/images/nodata.png" mode="widthFix"></image>
		</view>
		
		<view class="loading" v-if="news.length">
			<view v-if="loading == 1">数据加载中...</view>
			<view v-if="loading == 2">没有更多了~~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				clickNum: 0,
				navData: [],
				news: [],
				currentPage: 1,
				loading: 0    // 0默认 1加载中  2没有了
			}
		},
		onLoad() {
			this.getNavData()
			this.getNews()
		},
		onReachBottom() {
			if(this.loading == 2) return;
			this.currentPage++
			this.loading = 1
			this.getNews()
		},
		methods: {
			clickGetNum(index, id){
				this.clickNum = index;
				this.loading = 0
				this.currentPage = 1
				this.news = []
				this.getNews(id);   // 根据不同的id在相应的顶部标签中获取不同类型的news
			},
			goDetails(item){
				uni.navigateTo({
					url:`/pages/newsDetail/newsDetail?cid=${item.classid}&id=${item.id}`
				})
			},
			getNavData(){
				uni.request({
					url:"https://ku.qingnian8.com/dataApi/news/navlist.php",
					success: res => {
						this.navData = res.data
					}
				})
			},
			getNews(id=50){
				uni.request({
					url:"https://ku.qingnian8.com/dataApi/news/newslist.php",
					data: {
						cid: id,
						page: this.currentPage
					},
					success: res => {
						if(res.length == 0) {
							this.loading = 2
						}
						this.news = [...this.news, ...res.data]
					}
				})
			}
		}
	}

</script>

<style lang="scss" scoped>
	.navscroll {
		height: 100rpx;
		background-color: #f7f8fa;
		white-space: nowrap;
		position: fixed;
		z-index: 10;
		top: var(--window-top);
		left: 0;
		/**
		 * 因为 uni-app 自定义组件中有滚动条，所以通过下面的样式隐藏掉滚动条
		 * 百度搜索“uni-app 隐藏滚动条”
		 * 采用穿透模式
		 */
		/deep/ ::-webkit-scrollbar {
			width: 4px !important;
			height: 1px !important;
			overflow: auto !important;
			background: transparent !important;
			-webkit-appearance: auto !important;
			display: block;
		}
		.item {
			font-size: 40rpx;
			display: inline-block;
			line-height: 100rpx;
			padding: 0 30rpx;
			color: #333;
			&.active {
				color: #31C27C;
			}
		}
	}
	.content {
		padding: 30rpx;
		padding-top: 130rpx;
		.row {
			border-bottom: 1px dashed #efefef;
			padding-bottom: 20rpx;
		}
	}
	.nodata {
		display: flex;
		justify-content: center;
		iamge {
			max-width: 360rpx;
		}
	}
	.loading {
		text-align: center;
		font-size: 26rpx;
		color: #888;
		line-height: 2em;
	}
</style>
