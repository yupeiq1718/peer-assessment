const getDepartments = () => ['研發部', '管理部']

const roles = [
  {
    value: 1,
    text: '員工'
  },
  {
    value: 2,
    text: '主管'
  },
  {
    value: 3,
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

const getVariants = (index:number) => {
  const variants = ['success', 'alert', 'error', 'info']
  const variantIndex = index % variants.length
  return variants[variantIndex]
}

export {
  getDepartments, roles, questionTypes, getVariants
}
