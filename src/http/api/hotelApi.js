import serviceAxios from '../axios'

export const getRandHotel = () => {
  return serviceAxios({
    url: '/hotel/rand',
    method: 'get'
  })
}

export const getHotelInfoById = (id) => {
  return serviceAxios({
    url: `/hotel/info?id=${id}`,
    method: 'get'
  })
}
