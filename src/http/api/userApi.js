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
