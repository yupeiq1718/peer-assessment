import { defineStore } from 'pinia'
import { useApi } from '@/utilities/api'

const useHistory = defineStore('history', () => {
  type History = {
    year: number,
    filename: string[]
  }
  const histories = ref<History[]>()

  const createHistory = async ({ year, filename }:{
    year:number, filename:string
  }) => {
    try {
      const response = await useApi.post('/history', {
        year, filename
      })
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  const readHistory = async () => {
    try {
      const response = await useApi.get('/history/filter')
      histories.value = response.data.data
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  type HistoryScore = {
    department: string,
    id: number,
    name: string,
    picture?: string,
    scores: {
      average: number,
      tag: string
    }[]
  }

  const allHistoryScore = ref<HistoryScore[]>()

  const readAllHistoryScore = async ({ year, filename, roleId }: {
    year: number, filename: string, roleId: number
  }) => {
    try {
      const response = await useApi.get(`/history/scores?year=${year}&filename=${filename}&roleId=${roleId}`)
      allHistoryScore.value = response.data.data
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return {
    createHistory, readHistory, histories, allHistoryScore, readAllHistoryScore
  }
})

export {
  useHistory
}
