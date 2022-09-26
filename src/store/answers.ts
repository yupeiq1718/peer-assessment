import { defineStore } from 'pinia'
import { useApi } from '@/utilities/api'

const useAnswers = defineStore('answers', () => {
  type Answer = {
    qId: number,
    score?: number,
    comment?: string
  }

  type Reviewee = {
    id: number,
    department: string,
    name: string
  }

  type AnswerInformation = {
    id: number,
    isDone: boolean,
    reviewee: Reviewee,
    answers: Answer[]
  }

  const answersInformation = ref<AnswerInformation[]>()

  const createAnswers = async ({ reviewee, reviewer, qId, answers }: {
    reviewee: number,
    reviewer: number,
    qId: number,
    answers: Answer[]
  }) => {
    try {
      const response = await useApi.post('/answer', { reviewee, reviewer, qId, answers })
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const readAnswersInformation = async ({ userId, qId }:{
    userId:number, qId:number
  }) => {
    try {
      const response = await useApi.get(`/answer/all?userId=${userId}&qId=${qId}`)
      answersInformation.value = response.data.data
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return {
    answersInformation, createAnswers, readAnswersInformation
  }
})

export {
  useAnswers
}
