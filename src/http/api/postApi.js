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

export const getPostById = (id) => {
  return serviceAxios({
    url: `/post/info?id=${id}`,
    method: 'get'
  })
}

export const likePost = (id) => {
  return serviceAxios({
    url: '/post/like',
    method: 'post'
  })
}
