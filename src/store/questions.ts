import { defineStore } from 'pinia'
import { useApi } from '@/utilities/api'

const useQuestions = defineStore('questions', () => {
  type Question = {
    content: string,
    id: number,
    isRequired: boolean,
    tag: string,
    textDescription: string,
    textHint: string,
    typeId: number,
  }

  type Questionnaire = {
    description: string,
    id: number,
    questions: Question[],
    roleId: number
  }

  const questionnaire = ref<Questionnaire>()

  const readQuestionnaire = async (id:number) => {
    try {
      const response = await useApi.get(`/questionnaire?roleId=${id}`)
      questionnaire.value = response.data.questionnaire
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

  const questions = computed(() => questionnaire.value?.questions)

  const question = computed(() => (id:number) => questions.value?.find(question => question.id === id))

  return {
    questionnaire, readQuestionnaire, deleteQuestion, questions, question
  }
})

export {
  useQuestions
}
