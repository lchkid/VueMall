import { axios } from './axios'

export function getDetailData(id) {
  return axios({
    url: '/detail',
    params: {
      iid: id
    }
  })
}

export function getRecommendData() {
  return axios({
    url: '/recommend'
  })
}

export class Items {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.lowNowPrice;
  }
}