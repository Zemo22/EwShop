import {request} from "@/network/request";

export function getHomeAllData(){
  return request({
    url: '/api/index',
  })
}
export function getHomeGoods(type='sale',page=1){
  return request({
    url: '/api/index?'+type+'=1&page='+page,
  })
}