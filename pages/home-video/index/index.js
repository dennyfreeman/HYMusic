//导入网络请求通用包
import {getTopMV} from '../../../service/api-video.js'

Page({
	data: {
		topMVs: []
	},

	/**
	 * 生命周期函数——监听页面加载(created)
	 */
	onLoad: function (options) {
		// 一、第一种顶层网络封装方式
		// hyRequest.get("/top/mv", {offset: 0, limit: 10}).then( res => {
		// 	this.setData({topMVs: res.data.data})
		// })

		// 二、第二种简化二层网络封装方式
		getTopMV(0, 10).then( res => {
			this.setData({ topMVs: res.data.data})
		})

		// 简单网络请求例子：
		// //用临时的_this来解决一下回调函数的this问题，疑惑？？？？
		// const _this = this

		// //发送API网络请求
		// wx.request({
		// 	//地址请求
		// 	url: 'http://123.207.32.32:9001/top/mv',
		// 	//参数获取
		// 	data: {
		// 		//偏移数量
		// 		offset: 0,
		// 		//数据请求量
		// 		limit: 10
		// 	},
		// 	header: { 'content-type': 'application/json' },
		// 	method: 'GET',
		// 	dataType: 'json',
		// 	responseType: 'text',

		// 	//成功后的回调函数
		// 	success: function (result) {
		// 		console.log('success from home-video', result);
		// 		//将获取到的数据保存到data中
		// 		_this.setData({ topMVs: result.data.data })
		// 	},
		// 	//  这个是箭头函数，与上面同样的 success: (result)=>{},

		// 	//失败后的回调函数
		// 	fail: (err) => {
		// 		console.log('error from home-video', err)
		// 	},
		// 	complete: () => { }
		// });
	}
})