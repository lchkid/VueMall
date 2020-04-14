import AxiosInstance from 'axios'

export function axios(config) {
  const instance = AxiosInstance.create({
    baseURL: 'http://123.207.32.32:8000/', // 加微信coderwhy002获取新api
    timeout: 5000,
    withCredentials: true
  })
  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log('请求失败', err);
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log('响应失败', err);
  })
  return instance(config);
}