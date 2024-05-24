import Cinema from '.'
const prefix = ''
export const getAllPromotion = () => {
  const url = prefix + 'promotion/get-all-promotion'
  return Cinema.axiosClient.get(url)
}

