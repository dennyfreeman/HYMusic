//进一步方便式网络请求封装
import hyRequest from "./index.js";

//将一个网络请求封装到一个方法中
export function getTopMV(offset, limit = 10) {
  return hyRequest.get("/top/mv", {
    offset,
    limit: 10
  })
}