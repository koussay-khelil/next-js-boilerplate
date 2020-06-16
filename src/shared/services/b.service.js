import axios from 'axios'
import { requestHeader } from 'shared/utils/requestHeader'
import URL from './constants'

export const defaultApi = async () => {
  /* const result = await axios.get(
    URL.baseApiUrl() + URL.b.defaultApi,
    requestHeader(),
  )
  return result.data */
  return {message : 'default api'}
}