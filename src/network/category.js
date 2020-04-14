import { axios } from './axios'

export function getCategoryData() {
  return axios({
    url: '/category'
  })
}

export function getSubcategoryData(maitKey) {
  return axios({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetailData(miniWallkey, type) {
  return axios({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}