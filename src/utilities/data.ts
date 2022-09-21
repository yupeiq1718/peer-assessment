const getDepartments = () => ['研發部', '管理部']

const getRoles = () => [
  {
    value: 1,
    text: '一般員工'
  },
  {
    value: 2,
    text: '一般主管'
  },
  {
    value: 3,
    text: '高級主管'
  },
  {
    value: 4,
    text: '管理員'
  }
]

type QuestionTypes = {
  value: number,
  text: string
}
const questionTypes:QuestionTypes[] = [
  {
    value: 1,
    text: '評分'
  },
  {
    value: 2,
    text: '評分+文字'
  },
  {
    value: 3,
    text: '文字'
  }
]

export {
  getDepartments, getRoles, questionTypes
}
