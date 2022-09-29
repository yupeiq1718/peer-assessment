import { defineStore } from 'pinia'
import { useApi } from '@/utilities/api'

const useSystem = defineStore('system', () => {
  const systemStatus = ref()

  const readSystemStatus = async () => {
    try {
      const response = await useApi.get('/system-status-code')
      systemStatus.value = response.data.data.systemStatusCode
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const updateSystemStatus = async (status:number) => {
    try {
      const response = await useApi.put(`/system-status-code/${status}`)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return {
    systemStatus, readSystemStatus, updateSystemStatus
  }
})

export {
  useSystem
}
