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

  type Unfilled = {
    id:number,
    name:string,
    picture:string
  }
  type UnfilledList = {
    [key in number]: Unfilled[]
  }
  const unfilledList = ref<UnfilledList>({
    1: [],
    2: []
  })

  type WarningUser = {
    id:number,
    name:string,
    picture:string,
    q1_unfilled_count:number,
    q2_unfilled_count:number
  }
  const warningUserList = ref<WarningUser[]>([])

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
      const response = await useApi.get(`/answer?userId=${userId}&qId=${qId}`)
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

  const deleteAllAnswersInformation = async () => {
    try {
      const response = await useApi.delete('/answer')
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const readUnfilledList = async ({ qId, accountId }:{
    qId: number,
    accountId: number
  }) => {
    try {
      const response = await useApi.get(`/answer/unfilled?qId=${qId}&userId=${accountId}`)
      unfilledList.value[qId] = response.data.data
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const readWarningUserList = async () => {
    try {
      const response = await useApi.get('/answer/unfilled')
      warningUserList.value = response.data.data
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const isDoneAnswerUsers = computed(() => (qId:number) => answersInformation.value(qId)?.filter(answerInformation => answerInformation.isDone).map(answerInformation => answerInformation.reviewee.id))

  const answerInformation = computed(() => ({ qId, id }:{
    qId:number, id:number
  }) => answersInformation.value(qId)?.find(answerInformation => answerInformation.id === id))

  return {
    answersInformation, unfilledList, warningUserList, createAnswers, readAnswersInformation, updateAnswers, deleteAnswersInformation, deleteAllAnswersInformation, readUnfilledList, readWarningUserList, isDoneAnswerUsers, answerInformation
  }
})

export {
  useAnswers
}
