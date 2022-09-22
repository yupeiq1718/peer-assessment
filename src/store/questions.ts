import { defineStore } from 'pinia'
import { useApi } from '@/utilities/api'

const useQuestions = defineStore('questions', () => {
  type Question = {
    content: string,
    id: number,
    isRequired?: boolean,
    tag: string,
    textHint?: string,
    typeId: number,
  }

  type Questionnaire = {
    description: string,
    id: number,
    questions: Question[],
    roleId: number
  }

  type QuestionnaireMap = {
    [key in number]?: Questionnaire
  }

  const questionnaireMap = ref<QuestionnaireMap>({})
  const questionnaire = computed(() => (roleId:number) => questionnaireMap.value?.[roleId])

  type QuestionCreate = {
    content: string,
    isRequired?: boolean,
    tag: string,
    textHint?: string,
    typeId: number,
  }

  const createQuestion = async ({ roleId, question }:{
    roleId: number, question: QuestionCreate
  }) => {
    try {
      const response = await useApi.post(`/questionnaire/${roleId}`, question)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const readQuestionnaire = async (roleId:number) => {
    try {
      const response = await useApi.get(`/questionnaire?roleId=${roleId}`)

      questionnaireMap.value[roleId] = response.data.questionnaire
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  type QuestionUpdate = {
    content: string,
    isRequired?: boolean,
    tag: string,
    textHint?: string,
    typeId: number,
  }

  const updateQuestion = async ({ roleId, id, question }:{
    roleId: number, id: number, question: QuestionUpdate
  }) => {
    try {
      const response = await useApi.put(`/questionnaire/${roleId}/question/${id}`, question)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const deleteQuestion = async ({ roleId, id }:{
    roleId: number, id: number
  }) => {
    try {
      const response = await useApi.delete(`/questionnaire/${roleId}/question/${id}`)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const questions = computed(() => (roleId:number) => questionnaire.value(roleId)?.questions)

  const question = computed(() => ({ roleId, id }:{
    roleId: number, id: number
  }) => questions.value(roleId)?.find(question => question.id === id))

  return {
    questionnaire, createQuestion, readQuestionnaire, updateQuestion, deleteQuestion, questions, question
  }
})

export {
  useQuestions
}
