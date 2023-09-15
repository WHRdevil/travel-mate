import serviceAxios from '../axios'

export const login = (data) => {
  return serviceAxios({
    url: '/user/login',
    method: 'post',
    data
  })
}

export const register = (data) => {
  return serviceAxios({
    url: '/user/register',
    method: 'post',
    data
  })
}
