//网络封装源文件

//常量设置
const BASE_URL = "http://123.207.32.32:9001"

//开始用原生的js思路封装网络请求
class HYRequest {
  //一、请求数据的网络请求方法
  //构建需要请求的各类参数（如: url, method, parmas）
  request(url, method, params) {
    //使用Promise异步回调结果出去
    //然后直接在外面的函数中，使用 .then(res => {}) 获取成功结果。 同理，使用 .catch(err => {}) 获取失败结果。 
    return new Promise((resolve, reject) => {
      //resolve回调成功结果，reject回调拒绝结果
      wx.request({
        url: BASE_URL + url, //这里直接拼接原有的IP地址即可，前段只需提供后续地址
        method: method,
        data: params,
  
        //成功的回调函数
        success: function(result) {
          resolve(result) //使用resolve返回成功的网络请求
        },
  
        //失败后的回调函数
        fail: function(err) {
          reject(err) //使用reject返回失败信息
        }
      })
    })
  }

  //二、直接调用get请求，这里直接包含了GET方法
  get(url, params) {
    return this.request(url, "GET", params)
  }

  //三、调用post请求，直接包含了POST方法
  post(url, data) {
    return this.request(url, "POST", data)
  }

}

//最终的类分离打包（防止影响原来结构的打包方式）
const hyRequest = new HYRequest()

//将封装好的网络请求导出
export default hyRequest

// //示例
// //传入："后续地址", "使用的网络请求方法", {需要的附加参数}
// hyRequest.request("/top/mv", "GET", {offset: 0, limit: 10}).then( res => {
//   //此处为成功结果
  
// }).catch( err => {
//   //此处为失败结果

// })