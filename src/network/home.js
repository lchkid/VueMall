import { axios } from './axios'

export function getHomeMultiData() {
  return axios({
    url: '/home/multidata'
  })
}

export function getHomeGoodData(type, page) {
  return axios({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
