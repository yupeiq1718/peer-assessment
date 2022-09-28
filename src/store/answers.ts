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
    name: string,
    picture: string
  }

  type AnswerInformation = {
    id: number,
    isDone: boolean,
    reviewee: Reviewee,
    answers: Answer[]
  }

  type AnswerInformationMap = {
    [key in number]?: AnswerInformation[]
  }

  const answersInformationMap = ref<AnswerInformationMap>({})
  const answersInformation = computed(() => (qId:number) => answersInformationMap.value?.[qId])

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
      answersInformationMap.value[qId] = response.data.data
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const updateAnswers = async ({ id, reviewee, reviewer, qId, answers }: {
    id: number,
    reviewee: number,
    reviewer: number,
    qId: number,
    answers: Answer[]
  }) => {
    try {
      const response = await useApi.put(`/answer/${id}`, { reviewee, reviewer, qId, answers })
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const deleteAnswersInformation = async (id:number) => {
    try {
      const response = await useApi.delete(`/answer/${id}`)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const answerUsers = computed(() => (qId:number) => answersInformation.value(qId)?.map(answerInformation => answerInformation.reviewee.id))

  const answerInformation = computed(() => ({ qId, id }:{
    qId:number, id:number
  }) => answersInformation.value(qId)?.find(answerInformation => answerInformation.id === id))

  return {
    answersInformation, createAnswers, readAnswersInformation, updateAnswers, deleteAnswersInformation, answerUsers, answerInformation
  }
})

export {
  useAnswers
}
