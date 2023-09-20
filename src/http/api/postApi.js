import serviceAxios from '../axios'

export const uploadPost = (data) => {
  return serviceAxios({
    url: '/post/upload',
    method: 'post',
    data
  })
}

export const getRandPost = (count) => {
  return serviceAxios({
    url: `/post/rand?count=${count}`,
    method: 'get'
  })
}
