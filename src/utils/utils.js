export const timeAgo = (timestamp) => {
  const currentTime = new Date()
  const previousTime = new Date(timestamp)

  const timeDifference = currentTime - previousTime
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  if (daysDifference === 0) {
    return '今天'
  } else if (daysDifference === 1) {
    return '昨天'
  } else {
    return `${daysDifference} 天前`
  }
}

export const getAge = (birthTimestamp) => {
  const currentTimestamp = Date.now()
  let ageMilliseconds = currentTimestamp - birthTimestamp

  let ageYears = ageMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
  let age = Math.floor(ageYears)

  return age
}

export const BASE_URL = 'http://u.ronki.moe:8890'
