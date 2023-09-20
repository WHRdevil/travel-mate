import serviceAxios from '../axios'

export const getUserInfo = () => {
  return serviceAxios({
    url: '/user/info',
    method: 'get'
  })
}

export const getRandUserInfo = (count) => {
  return serviceAxios({
    url: `/user/rand?count=${count}`,
    method: 'get'
  })
}

export const getUserInfoById = (id) => {
  return serviceAxios({
    url: `/user/info/${id}`,
    method: 'get'
  })
}

export const followById = (id) => {
  return serviceAxios({
    url: '/user/follow',
    method: 'post',
    data: {
      follow_id: id
    }
  })
}
