import serviceAxios from '../axios'

export const uploadImage = (data) => {
  return serviceAxios({
    url: '/upload/img',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
