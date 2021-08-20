import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn/',
    timeout: 5000
  })

  //request interception
  instance.interceptors.request.use(config => {
    //check token

    //allowed to pass
    return config
  },error => {})

  //response interception
  instance.interceptors.response.use(res=>{
    return res.data ? res.data : res;
  },error => {

  })

  return instance(config);
}