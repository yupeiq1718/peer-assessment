import { defineStore } from 'pinia'
import { useApi } from '@/utilities/api'

const useHistory = defineStore('history', () => {
  const history = ref()

  const createHistory = async ({ year, time }:{
    year:number, time:number
  }) => {
    try {
      const response = await useApi.post(`/history/${year}/${time}`)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  const readHistory = async () => {
    try {
      const response = await useApi.get('/history/filter')
      history.value = response.data.data
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return {
    createHistory, readHistory
  }
})

export {
  useHistory
}
